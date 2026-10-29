import { NextRequest, NextResponse } from "next/server";
import { cleanClassName, getApplication, sendTemplateMessage } from "@/lib/whatsapp";

// Only send for applications created within this window, so this public
// endpoint can't be used to re-send messages for old applications.
const MAX_APPLICATION_AGE_MS = 15 * 60 * 1000;

export async function POST(req: NextRequest) {
  try {
    const { applicationNumber } = await req.json();
    if (!applicationNumber || typeof applicationNumber !== "string") {
      return NextResponse.json({ error: "applicationNumber is required" }, { status: 400 });
    }

    const app = await getApplication(applicationNumber);
    if (!app) {
      return NextResponse.json({ error: "Application not found" }, { status: 404 });
    }
    if (Date.now() - new Date(app.created_at).getTime() > MAX_APPLICATION_AGE_MS) {
      return NextResponse.json({ error: "Application is too old for a registration message" }, { status: 409 });
    }

    // Variables for scholarship_app_reg:
    // {{1}} = Student Name, {{2}} = Class, {{3}} = Application No
    const result = await sendTemplateMessage({
      idPrefix: "reg",
      to: app.primary_contact_number,
      templateId: parseInt(process.env.WHATSAPP_REGISTRATION_TEMPLATE_ID || "1825066", 10),
      variables: [app.student_name, cleanClassName(app.class_applied_for), app.application_number],
    });

    console.log(`[WhatsApp API: Registration] ${app.application_number} gateway result:`, JSON.stringify(result));
    return NextResponse.json({ success: true, gatewayResponse: result });
  } catch (error: unknown) {
    console.error("WhatsApp Registration Error:", error);
    const msg = error instanceof Error ? error.message : "Failed to send WhatsApp alert";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
