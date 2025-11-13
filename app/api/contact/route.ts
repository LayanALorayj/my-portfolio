import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const apiKey = process.env.SENDGRID_API_KEY;
    const from = process.env.SENDGRID_FROM;
    const to = process.env.SENDGRID_TO;

    if (!apiKey || !from || !to) {
      console.error("Env variables missing", { apiKey, from, to });
      return NextResponse.json({ error: "Env variables missing" }, { status: 500 });
    }

    const res = await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        personalizations: [{ to: [{ email: to }] }],
        from: { email: from },
        subject: `New contact from ${name}`,
        content: [
          {
            type: "text/plain",
            value: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
          },
        ],
      }),
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error("SendGrid error:", errorText);
      return NextResponse.json({ error: "SendGrid failed", details: errorText }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Server error:", err);
    return NextResponse.json({ error: "Server error", details: String(err) }, { status: 500 });
  }
}
