import { NextRequest, NextResponse } from "next/server";
import { cleanClassName, getApplication, sendTemplateMessage } from "@/lib/whatsapp";

export async function POST(req: NextRequest) {
  try {
    const { applicationNumber, examDate = "November 29, 2026" } = await req.json();
    if (!applicationNumber || typeof applicationNumber !== "string") {
      return NextResponse.json({ error: "applicationNumber is required" }, { status: 400 });
    }

    const app = await getApplication(applicationNumber);
    if (!app) {
      return NextResponse.json({ error: "Application not found" }, { status: 404 });
    }

    // Variables for scholarship__examination_2026:
    // {{1}} = Exam Date, {{2}} = Student Name, {{3}} = Class, {{4}} = Application No
    const result = await sendTemplateMessage({
      idPrefix: "broadcast",
      to: app.primary_contact_number,
      templateId: parseInt(process.env.WHATSAPP_BROADCAST_TEMPLATE_ID || "1825071", 10),
      variables: [String(examDate), app.student_name, cleanClassName(app.class_applied_for), app.application_number],
    });

    console.log(`[WhatsApp API: Broadcast] ${app.application_number} gateway result:`, JSON.stringify(result));
    return NextResponse.json({ success: true, gatewayResponse: result });
  } catch (error: unknown) {
    console.error("WhatsApp Broadcast Error:", error);
    const msg = error instanceof Error ? error.message : "Failed to send WhatsApp broadcast";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
