// pages/api/send-email.js
import { NextResponse } from "next/server";
import { transporter } from "@/lib/mailTransporter";

export async function POST(req) {
  try {
    const data = await req.json();
    const clientMailBody = `
      <div>
        <h1>Hello, ${data.name}</h1>
        <h4>Thank you for your message.</h4>
        <p>Your message has been successfully sent to Serendipity.</p>
        <p>Serendipity will contact you as soon as possible.</p>
        <br />
        <p>Best Regards,</p>
        <h5>Serendipity</h5>
      </div>
    `;

    const clientMailOpt = {
      from: process.env.GMAIL_ID, // Replace with your email
      to: data.email,
      subject: "Message Received - Serendipity",
      html: clientMailBody,
    };

    const sendToClient = await transporter.sendMail(clientMailOpt);
    if (sendToClient.rejected.length > 0) {
      return NextResponse.json({ error: "Invalid email" }, { status: 404 });
    }
    const ownerMailBody = `<div>
        <h1>Name : ${data.name}</h1>
        <h4>Email : ${data.email}</h4>
        <p>Message : ${data.message}</p>
    </div>`;
    const ownerMailOpt = {
      from: data.email,
      to: process.env.GMAIL_ID,
      subject: `Serendipty, from ${data.name}`,
      html: ownerMailBody,
    };
    const res = await transporter.sendMail(ownerMailOpt);
    if (!res.accepted.length > 0) {
      return NextResponse.json(
        { error: "Your message was not accepted" },
        { status: 501 }
      );
    }
    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 }
    );
  }
}
