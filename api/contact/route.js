import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export async function POST(request) {
  try {
    const { fullName, phone, location, projectDetails } = await request.json();
    const name = String(fullName || '').trim();
    const phoneNumber = String(phone || '').trim();
    const propertyLocation = String(location || '').trim();
    const details = String(projectDetails || '').trim();

    if (!name || phoneNumber.replace(/\D/g, '').length < 7 || !propertyLocation || !details) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
    }

    const subjectName = name.replace(/[\r\n]/g, ' ').slice(0, 120);
    const emailResponse = await resend.emails.send({
      from: 'Moonstone Website <no-reply@moonstoneconstruction.com>',
      to: ['moonstone@moonstoneconstruction.com'],
      cc: ['brad@moonstoneconstruction.com'],
      subject: `New project inquiry from ${subjectName}`,
      html: `
        <h2>New project inquiry</h2>
        <p><strong>Full name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phoneNumber)}</p>
        <p><strong>Property location:</strong> ${escapeHtml(propertyLocation)}</p>
        <p><strong>Project details:</strong></p>
        <p style="white-space: pre-line;">${escapeHtml(details)}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true, id: emailResponse.id }), { status: 200 });
  } catch {
    return new Response(JSON.stringify({ error: 'The message could not be sent.' }), { status: 500 });
  }
}
