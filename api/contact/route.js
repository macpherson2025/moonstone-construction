import { Resend } from 'resend';

// Initialize with your Resend API Key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, phone, message } = await request.json();

    // Basic server-side validation
    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
    }

    const emailResponse = await resend.emails.send({
      from: 'Moonstone Website <no-reply@moonstoneconstruction.com>',
      to: ['info@moonstoneconstruction.com'],
      cc: ['brad@moonstoneconstruction.com'],
      subject: `New Custom Build Inquiry from ${name}`,
      html: `
        <h2>New Website Project Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Project Details:</strong></p>
        <p style="white-space: pre-line; background: #f5f5f4; padding: 15px; border-left: 4px solid #b45309;">${message}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true, id: emailResponse.id }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
