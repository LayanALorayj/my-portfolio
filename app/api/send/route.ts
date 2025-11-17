import { NextResponse } from "next/server";

export async function POST(req: Request) {
  console.log(' API Route called');
  
  try {
    const body = await req.json();
    console.log(' Request body:', body);
    
    const { name, email, message } = body;
    console.log('Extracted data:', { name, email, message });

    if (!name || !email || !message) {
      console.log(' Missing fields');
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const apiKey = process.env.NEXT_PUBLIC_SENDGRID_API_KEY;
    const fromEmail = process.env.NEXT_PUBLIC_SENDGRID_FROM;
    const toEmail = process.env.NEXT_PUBLIC_SENDGRID_TO;

    console.log(' Environment check:', {
      hasApiKey: !!apiKey,
      apiKeyLength: apiKey?.length,
      fromEmail,
      toEmail
    });

    if (!apiKey) {
      console.log(' API Key missing');
      return NextResponse.json({ error: "API key is missing" }, { status: 500 });
    }

    if (!fromEmail || !toEmail) {
      console.log(' Email settings incomplete');
      return NextResponse.json({ error: "Email settings are incomplete" }, { status: 500 });
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
            subject: `New message from ${name} - Portfolio`,
          },
        ],
        from: { email: fromEmail },
        content: [
          {
            type: "text/plain",
            value: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
          },
        ],
      }),
    });

    console.log(' SendGrid response status:', sendgridResponse.status);

    if (!sendgridResponse.ok) {
      const errorText = await sendgridResponse.text();
      console.log(' SendGrid error response:', errorText);
      return NextResponse.json({ 
        error: "Failed to send message via SendGrid" 
      }, { status: 500 });
    }

    console.log(' Email sent successfully!');
    return NextResponse.json({ 
      success: true, 
      message: "Message sent successfully!" 
    });

  } catch (err) {
    console.log(' Catch block error:', err);
    return NextResponse.json({ 
      error: "An unexpected server error occurred" 
    }, { status: 500 });
  }
}