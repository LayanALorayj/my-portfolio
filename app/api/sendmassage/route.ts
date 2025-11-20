import { NextResponse } from "next/server";

export async function POST(req: Request) {
  console.log('API Route called - Honeypot Check');
  
  try {
    const body = await req.json();
    console.log('Request body received');
    
    const { name, email, message, honeypot } = body;
    console.log('Extracted data:', { name, email, message });

    if (honeypot && honeypot.trim() !== "") {
      console.log('BOT DETECTED - Honeypot field is filled:', honeypot);
      return NextResponse.json({ 
        success: true, 
        message: "Message sent successfully!" 
      });
    }

    if (!name || !email || !message) {
      console.log('Missing required fields');
      return NextResponse.json({ 
        error: "All fields are required" 
      }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log('Invalid email format');
      return NextResponse.json({ 
        error: "Please enter a valid email address" 
      }, { status: 400 });
    }

    const apiKey = process.env.NEXT_PUBLIC_SENDGRID_API_KEY;
    const fromEmail = process.env.NEXT_PUBLIC_SENDGRID_FROM;
    const toEmail = process.env.NEXT_PUBLIC_SENDGRID_TO;

    console.log('🔑 Environment check:', {
      hasApiKey: !!apiKey,
      apiKeyLength: apiKey?.length,
      fromEmail,
      toEmail
    });

    if (!apiKey) {
      console.log('API Key missing');
      return NextResponse.json({ 
        error: "API key is missing" 
      }, { status: 500 });
    }

    if (!fromEmail || !toEmail) {
      console.log('Email settings incomplete');
      return NextResponse.json({ 
        error: "Email settings are incomplete" 
      }, { status: 500 });
    }

    console.log('Attempting to send to SendGrid...');
    
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
            subject: `New Portfolio Message from ${name}`,
          },
        ],
        from: { email: fromEmail },
        reply_to: { email: email }, 
        content: [
          {
            type: "text/plain",
            value: `Name: ${name}\nEmail: ${email}\nMessage: ${message}\n\n📧 Sent from Portfolio Contact Form`
          },
          {
            type: "text/html",
            value: `
              <div style="font-family: Arial, sans-serif; padding: 20px;">
                <h2 style="color: #333;">New Message from Portfolio</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <div style="background: #f5f5f5; padding: 15px; border-radius: 5px;">
                  ${message.replace(/\n/g, '<br>')}
                </div>
                <hr>
                <p style="color: #666; font-size: 12px;">
                  Sent from your portfolio contact form
                </p>
              </div>
            `
          },
        ],
      }),
    });

    console.log('SendGrid response status:', sendgridResponse.status);

    if (!sendgridResponse.ok) {
      const errorText = await sendgridResponse.text();
      console.log('SendGrid error response:', errorText);
      return NextResponse.json({ 
        error: "Failed to send message. Please try again later." 
      }, { status: 500 });
    }

    console.log('Email sent successfully!');
    console.log('Message details:', { name, email, messageLength: message.length });
    
    return NextResponse.json({ 
      success: true, 
      message: "Message sent successfully! I'll get back to you soon." 
    });

  } catch (err) {
    console.log('Catch block error:', err);
    return NextResponse.json({ 
      error: "An unexpected server error occurred. Please try again later." 
    }, { status: 500 });
  }
}