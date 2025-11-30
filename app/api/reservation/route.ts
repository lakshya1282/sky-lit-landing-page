import { NextResponse } from "next/server";
import Twilio from "twilio";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      name = "N/A",
      email = "N/A",
      phone = "N/A",
      date = "N/A",
      guests = "N/A",
      message = "N/A",
    } = body;

    const accountSid = process.env.TWILIO_ACCOUNT_SID!;
    const authToken = process.env.TWILIO_AUTH_TOKEN!;
    const twilioWhatsappNumber = process.env.TWILIO_WHATSAPP_NUMBER!; // e.g. whatsapp:+14155238886 (sandbox)
    const ownerNumber = process.env.WHATSAPP_OWNER_NUMBER!; // e.g. whatsapp:+91XXXXXXXXXX

    if (!accountSid || !authToken || !twilioWhatsappNumber || !ownerNumber) {
      return NextResponse.json(
        { error: "Missing Twilio environment variables" },
        { status: 500 }
      );
    }

    const client = Twilio(accountSid, authToken);

    const waMessage = `📩 New Reservation Request

Name: ${name}
Email: ${email}
Phone: ${phone}
Date: ${date}
Guests: ${guests}
Notes: ${message}`;

    // Send WhatsApp via Twilio
    await client.messages.create({
      from: twilioWhatsappNumber,
      to: ownerNumber,
      body: waMessage,
    });

    return NextResponse.json({
      success: true,
      message: "Reservation sent to owner's WhatsApp via Twilio",
    });
  } catch (error) {
    console.error("Twilio Server Error:", error);
    return NextResponse.json({ error: "Internal Server Error (Twilio)" }, { status: 500 });
  }
}
