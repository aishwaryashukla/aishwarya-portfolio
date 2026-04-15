import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, message } = body;

        // Use the Brevo API key from env variable
        const brevApiKey = process.env.BREVO_API_KEY!;

        const response = await fetch('https://api.brevo.com/v3/smtp/email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'api-key': brevApiKey
            },
            body: JSON.stringify({
                sender: { email: 'aishwarya.shukla@gmail.com', name: 'Portfolio Contact Form' },
                to: [{ email: 'aishwarya.shukla@gmail.com', name: 'Aishwarya' }],
                replyTo: { email: email, name: name },
                subject: `New Portfolio Contact Message from ${name}`,
                htmlContent: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong><br/> ${message}</p>`
            })
        });

        if (response.ok) {
            return NextResponse.json({ success: true }, { status: 200 });
        } else {
            console.error(await response.text());
            return NextResponse.json({ error: 'Failed to send automated email' }, { status: 500 });
        }
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
