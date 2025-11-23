import { NextResponse } from "next/server";

export async function POST(req: Request) {
  console.log('Contact Form API Called');
  
  try {
    const body = await req.json();
    const { name, email, message, turnstileToken } = body;

    if (!turnstileToken) {
      return NextResponse.json({ 
        error: "Security verification failed." 
      }, { status: 400 });
    }

    const turnstileResponse = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          secret: process.env.TURNSTILE_SECRET_KEY,
          response: turnstileToken,
        }),
      }
    );

    const turnstileData = await turnstileResponse.json();
    
    if (!turnstileData.success) {
      console.log('Turnstile verification failed');
      return NextResponse.json({ 
        error: "Security check failed. Please try again." 
      }, { status: 400 });
    }

    console.log('✅ Turnstile verification successful');

    if (!name || !email || !message) {
      return NextResponse.json({ 
        error: "All fields are required." 
      }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ 
        error: "Please enter a valid email address." 
      }, { status: 400 });
    }

    const apiKey = process.env.NEXT_PUBLIC_SENDGRID_API_KEY;
    const fromEmail = process.env.NEXT_PUBLIC_SENDGRID_FROM;
    const toEmail = process.env.NEXT_PUBLIC_SENDGRID_TO;

    if (!apiKey || !fromEmail || !toEmail) {
      console.log('Missing environment variables');
      return NextResponse.json({ 
        error: "Server configuration error." 
      }, { status: 500 });
    }

    const sendgridResponse = await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [{ email: toEmail }],
            subject: `New Message from ${name} - Portfolio Contact`,
          },
        ],
        from: { email: fromEmail },
        reply_to: { email: email },
        content: [
          {
            type: "text/plain",
            value: `
            Name: ${name}
            Email: ${email}
            Message: ${message}
            Sent from Portfolio Contact Form
            `
          },
          {
            type: "text/html",
            value: `
              <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
                <h2 style="color: #333; border-bottom: 2px solid #667eea; padding-bottom: 10px;">
                  New Message From Portfolio
                </h2>
                <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <p><strong>Name:</strong> ${name}</p>
                  <p><strong>Email:</strong> ${email}</p>
                  <p><strong>Message:</strong></p>
                  <div style="background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #667eea;">
                    ${message.replace(/\n/g, '<br>')}
                  </div>
                </div>
                <hr style="border: none; border-top: 1px solid #ddd;">
                <p style="color: #666; font-size: 12px; text-align: center;">
                  This message was sent from your portfolio contact form
                </p>
              </div>
            `
          },
        ],
      }),
    });

    if (!sendgridResponse.ok) {
      const errorText = await sendgridResponse.text();
      console.log('SendGrid error:', errorText);
      return NextResponse.json({ 
        error: "Failed to send message. Please try again later." 
      }, { status: 500 });
    }

    console.log('Email sent successfully!');
    
    return NextResponse.json({ 
      success: true, 
      message: "Message sent successfully! I'll get back to you soon." 
    });

  } catch (error) {
    console.log('Server error:', error);
    return NextResponse.json({ 
      error: "An unexpected error occurred. Please try again later." 
    }, { status: 500 });
  }
}