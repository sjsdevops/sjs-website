/**
 * Sree Jayam School - WhatsApp Messaging Service (server-only)
 * ValueFirst Unified v2 Gateway Integration
 */
import { createClient } from "@supabase/supabase-js";

export interface ApplicationRow {
  application_number: string;
  student_name: string;
  class_applied_for: string;
  primary_contact_number: string;
  created_at: string;
}

/**
 * Look up an application with the service-role key (bypasses RLS).
 * The WhatsApp recipient always comes from the database, never from the request.
 */
export async function getApplication(applicationNumber: string): Promise<ApplicationRow | null> {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || "",
    process.env.SUPABASE_SERVICE_ROLE_KEY || "",
    { auth: { persistSession: false } }
  );
  const { data, error } = await supabase
    .from("scholarship_applications")
    .select("application_number, student_name, class_applied_for, primary_contact_number, created_at")
    .eq("application_number", applicationNumber.trim())
    .maybeSingle<ApplicationRow>();
  if (error) throw error;
  return data;
}

/**
 * Format phone number for WhatsApp (e.g., ensure 91 prefix for Indian numbers)
 */
export function formatWhatsAppNumber(phone: string): string {
  const cleaned = phone.replace(/\D/g, "");
  if (cleaned.length === 10) {
    return `91${cleaned}`;
  }
  return cleaned;
}

/**
 * Normalize class e.g. "7" instead of "Class 7" to avoid template format issues
 */
export function cleanClassName(classApplied: string): string {
  return classApplied.replace(/^class\s*/i, "").trim() || classApplied.trim();
}

/**
 * Send a WhatsApp template message to one number via the Unified v2 Gateway.
 * Template variables go in templateinfo as "<templateId>~<var1>~<var2>...".
 */
export async function sendTemplateMessage(opts: {
  idPrefix: string;
  to: string;
  templateId: number;
  variables: string[];
}) {
  const apiUrl = process.env.WHATSAPP_API_URL || "https://103.229.250.150/unified/v2/send";
  const clientId = process.env.WHATSAPP_CLIENT_ID || "";
  const clientPassword = process.env.WHATSAPP_CLIENT_PASSWORD || "";
  const sender = process.env.WHATSAPP_SENDER || "916369099925";
  const tag = process.env.WHATSAPP_TAG || "user_id:3";

  if (!clientId || !clientPassword) {
    throw new Error("WHATSAPP_CLIENT_ID / WHATSAPP_CLIENT_PASSWORD are not set");
  }

  // Variables must not contain newlines/tabs, and "~" is the separator
  const variables = opts.variables.map((v) => v.replace(/[~\r\n\t]+/g, " ").trim());

  const payload = {
    whatsapp: {
      messages: [
        {
          id: `${opts.idPrefix}_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
          coding: 1,
          msgtype: 1,
          text: "",
          templateinfo: [opts.templateId, ...variables].join("~"),
          addresses: [
            {
              seq: "1",
              to: formatWhatsAppNumber(opts.to),
              from: sender,
              tag,
            },
          ],
        },
      ],
    },
  };

  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      Authorization: "Basic " + Buffer.from(`${clientId}:${clientPassword}`).toString("base64"),
      "Content-Type": "application/json",
      "x-client-id": clientId,
      "x-client-password": clientPassword,
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json().catch(() => ({ status: "Unknown", statustext: response.statusText }));
  return { status: response.status, data };
}
