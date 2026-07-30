import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import nodemailer from "nodemailer";

const DATA_FILE_PATH = path.join(process.cwd(), "src", "data", "inquiries.json");

export interface InquiryRecord {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  city: string;
  serviceRequired: string;
  budget: string;
  timeline: string;
  projectDescription: string;
  referenceFileName?: string | null;
  status: "New" | "Contacted" | "In Progress" | "Completed";
  createdAt: string;
}

async function getStoredInquiries(): Promise<InquiryRecord[]> {
  try {
    const data = await fs.readFile(DATA_FILE_PATH, "utf-8");
    return JSON.parse(data) as InquiryRecord[];
  } catch (error) {
    return [];
  }
}

async function saveInquiries(inquiries: InquiryRecord[]): Promise<void> {
  try {
    const dir = path.dirname(DATA_FILE_PATH);
    await fs.mkdir(dir, { recursive: true });
    await fs.writeFile(DATA_FILE_PATH, JSON.stringify(inquiries, null, 2), "utf-8");
  } catch (error) {
    console.error("Failed to save inquiries to file:", error);
  }
}

async function sendEmailNotification(inquiry: InquiryRecord) {
  const smtpHost = process.env.SMTP_HOST;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const smtpPort = Number(process.env.SMTP_PORT) || 587;
  const notificationEmail = process.env.NOTIFICATION_EMAIL || "niviarthub@gmail.com";

  if (!smtpHost || !smtpUser || !smtpPass) {
    console.log("SMTP credentials not configured. Skipping email dispatch.");
    return { sent: false, reason: "SMTP not configured" };
  }

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const mailOptions = {
      from: `"Nivi Art Hub Inquiries" <${smtpUser}>`,
      to: notificationEmail,
      subject: `🎨 New Custom Order Inquiry [Ref: ${inquiry.id}] from ${inquiry.fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; rounded: 12px;">
          <h2 style="color: #FF7A00; margin-bottom: 5px;">🎨 Nivi Art Hub - New Custom Order Inquiry</h2>
          <p style="color: #666; font-size: 14px;">Inquiry Reference ID: <strong>${inquiry.id}</strong></p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 15px 0;" />
          
          <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 14px;">
            <tr><td style="padding: 6px 0; color: #777;">Full Name:</td><td style="padding: 6px 0; font-weight: bold; color: #222;">${inquiry.fullName}</td></tr>
            <tr><td style="padding: 6px 0; color: #777;">Email:</td><td style="padding: 6px 0; font-weight: bold; color: #222;">${inquiry.email}</td></tr>
            <tr><td style="padding: 6px 0; color: #777;">Phone / WhatsApp:</td><td style="padding: 6px 0; font-weight: bold; color: #222;">${inquiry.phone}</td></tr>
            <tr><td style="padding: 6px 0; color: #777;">City:</td><td style="padding: 6px 0; font-weight: bold; color: #222;">${inquiry.city}</td></tr>
            <tr><td style="padding: 6px 0; color: #777;">Service Required:</td><td style="padding: 6px 0; font-weight: bold; color: #E91E63;">${inquiry.serviceRequired}</td></tr>
            <tr><td style="padding: 6px 0; color: #777;">Estimated Budget:</td><td style="padding: 6px 0; font-weight: bold; color: #FF7A00;">${inquiry.budget}</td></tr>
            <tr><td style="padding: 6px 0; color: #777;">Timeline Needed:</td><td style="padding: 6px 0; font-weight: bold; color: #222;">${inquiry.timeline}</td></tr>
            ${inquiry.referenceFileName ? `<tr><td style="padding: 6px 0; color: #777;">Reference File:</td><td style="padding: 6px 0; font-weight: bold; color: #222;">${inquiry.referenceFileName}</td></tr>` : ""}
          </table>

          <div style="margin-top: 15px; padding: 12px; background: #f9f9f9; border-radius: 8px;">
            <strong style="color: #444; font-size: 13px;">Project Description & Personalization Notes:</strong>
            <p style="margin: 6px 0 0 0; color: #333; font-size: 14px; white-space: pre-wrap;">${inquiry.projectDescription}</p>
          </div>

          <div style="margin-top: 20px; text-align: center;">
            <a href="https://wa.me/${inquiry.phone.replace(/[^0-9]/g, "")}" style="display: inline-block; background: #25D366; color: white; padding: 10px 20px; text-decoration: none; border-radius: 8px; font-weight: bold;">
              Reply Customer on WhatsApp
            </a>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return { sent: true };
  } catch (err: any) {
    console.error("Failed to send notification email:", err);
    return { sent: false, error: err.message };
  }
}

export async function GET() {
  const inquiries = await getStoredInquiries();
  return NextResponse.json({ success: true, inquiries });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      fullName,
      email,
      phone,
      city,
      serviceRequired,
      budget,
      timeline,
      projectDescription,
      referenceFileName,
    } = body;

    if (!fullName || !email || !phone || !city || !serviceRequired || !projectDescription) {
      return NextResponse.json(
        { success: false, error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    // Generate reference ID e.g. NAH-2026-X892
    const randomSuffix = Math.random().toString(36).substring(2, 6).toUpperCase();
    const inquiryId = `NAH-2026-${randomSuffix}`;

    const newInquiry: InquiryRecord = {
      id: inquiryId,
      fullName,
      email,
      phone,
      city,
      serviceRequired,
      budget: budget || "Not specified",
      timeline: timeline || "Standard (3-7 Days)",
      projectDescription,
      referenceFileName: referenceFileName || null,
      status: "New",
      createdAt: new Date().toISOString(),
    };

    // Store in JSON file
    const existingInquiries = await getStoredInquiries();
    existingInquiries.unshift(newInquiry);
    await saveInquiries(existingInquiries);

    // Attempt email dispatch
    const emailResult = await sendEmailNotification(newInquiry);

    // Generate WhatsApp direct text
    const whatsappMsg = `Hello Nivi Art Hub,\n\nI just submitted a custom order inquiry on your website!\n*Ref ID:* ${inquiryId}\n*Name:* ${fullName}\n*Service:* ${serviceRequired}\n*City:* ${city}\n*Phone:* ${phone}\n*Budget:* ${budget}\n*Timeline:* ${timeline}\n*Details:* ${projectDescription}`;
    const whatsappUrl = `https://wa.me/919842540163?text=${encodeURIComponent(whatsappMsg)}`;

    return NextResponse.json({
      success: true,
      message: "Custom art inquiry received and stored successfully!",
      inquiry: newInquiry,
      emailSent: emailResult.sent,
      whatsappUrl,
    });
  } catch (error: any) {
    console.error("Error processing contact form API:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to process custom order inquiry." },
      { status: 500 }
    );
  }
}

export async function PATCH(request: Request) {
  try {
    const { id, status } = await request.json();
    if (!id || !status) {
      return NextResponse.json({ success: false, error: "Missing id or status." }, { status: 400 });
    }

    const inquiries = await getStoredInquiries();
    const index = inquiries.findIndex((i) => i.id === id);
    if (index === -1) {
      return NextResponse.json({ success: false, error: "Inquiry not found." }, { status: 404 });
    }

    inquiries[index].status = status;
    await saveInquiries(inquiries);

    return NextResponse.json({ success: true, inquiries });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
