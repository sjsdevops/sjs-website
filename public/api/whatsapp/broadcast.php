<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    exit;
}

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["error" => "Method not allowed"]);
    exit;
}

$input = json_decode(file_get_contents("php://input"), true);
$applicationNumber = isset($input["applicationNumber"]) ? trim($input["applicationNumber"]) : "";
$examDate = isset($input["examDate"]) && !empty($input["examDate"]) ? trim($input["examDate"]) : "November 29, 2026";

if (empty($applicationNumber)) {
    http_response_code(400);
    echo json_encode(["error" => "applicationNumber is required"]);
    exit;
}

// Supabase & WhatsApp Gateway Configuration
$supabaseUrl = "https://bpwiyjhpirlcdmulpbhx.supabase.co";
$supabaseServiceKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJwd2l5amhwaXJsY2RtdWxwYmh4Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc5MzE3OTM0MiwiZXhwIjoyMTA4NzU1MzQyfQ.vxkLWvpbqaes0_0wC_IVTbGWPrfuWQE75pCCjDdkYa4";
$whatsappApiUrl = "https://103.229.250.150/unified/v2/send";
$clientId = "sreejayamschooljmroauhjb";
$clientPassword = "ugv4tr0q0dk492euzeqe6frzqdibv0z1";
$sender = "916369099925";
$tag = "user_id:3";
$templateId = 1825071;

// 1. Fetch application details from Supabase using Service Role key
$ch = curl_init($supabaseUrl . "/rest/v1/scholarship_applications?application_number=eq." . urlencode($applicationNumber) . "&select=application_number,student_name,class_applied_for,primary_contact_number,created_at");
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HTTPHEADER => [
        "apikey: " . $supabaseServiceKey,
        "Authorization: Bearer " . $supabaseServiceKey,
        "Content-Type: application/json"
    ],
    CURLOPT_SSL_VERIFYPEER => false,
    CURLOPT_SSL_VERIFYHOST => false,
    CURLOPT_TIMEOUT => 15
]);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

$apps = json_decode($response, true);
if (empty($apps) || !is_array($apps)) {
    http_response_code(404);
    echo json_encode(["error" => "Application not found", "details" => $response]);
    exit;
}

$app = $apps[0];

// Format phone number (ensure 91 prefix for Indian numbers)
$phoneClean = preg_replace("/\D/", "", $app["primary_contact_number"]);
if (strlen($phoneClean) === 10) {
    $phoneClean = "91" . $phoneClean;
}

// Clean class name e.g. "Class 7" -> "7"
$classClean = preg_replace("/^class\s*/i", "", trim($app["class_applied_for"]));

// Sanitize variables: no tildes, newlines, or tabs
$v1 = preg_replace("/[~\r\n\t]+/", " ", trim($examDate));
$v2 = preg_replace("/[~\r\n\t]+/", " ", trim($app["student_name"]));
$v3 = preg_replace("/[~\r\n\t]+/", " ", trim($classClean));
$v4 = preg_replace("/[~\r\n\t]+/", " ", trim($app["application_number"]));

$templateinfo = "{$templateId}~{$v1}~{$v2}~{$v3}~{$v4}";
$msgId = "broadcast_" . round(microtime(true) * 1000) . "_" . substr(md5(uniqid(mt_rand(), true)), 0, 5);

$payload = [
    "whatsapp" => [
        "messages" => [
            [
                "id" => $msgId,
                "coding" => 1,
                "msgtype" => 1,
                "text" => "",
                "templateinfo" => $templateinfo,
                "addresses" => [
                    [
                        "seq" => "1",
                        "to" => $phoneClean,
                        "from" => $sender,
                        "tag" => $tag
                    ]
                ]
            ]
        ]
    ]
];

$chWa = curl_init($whatsappApiUrl);
curl_setopt_array($chWa, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST => true,
    CURLOPT_POSTFIELDS => json_encode($payload),
    CURLOPT_HTTPHEADER => [
        "Content-Type: application/json",
        "Authorization: Basic " . base64_encode("{$clientId}:{$clientPassword}")
    ],
    CURLOPT_SSL_VERIFYPEER => false,
    CURLOPT_SSL_VERIFYHOST => false,
    CURLOPT_TIMEOUT => 20
]);

$waResponse = curl_exec($chWa);
$curlErr = curl_error($chWa);
curl_close($chWa);

if ($curlErr) {
    http_response_code(500);
    echo json_encode(["error" => "Failed to reach WhatsApp Gateway: " . $curlErr]);
    exit;
}

$gatewayResult = json_decode($waResponse, true);
http_response_code(200);
echo json_encode([
    "success" => true,
    "gatewayResponse" => $gatewayResult ? $gatewayResult : $waResponse
]);
