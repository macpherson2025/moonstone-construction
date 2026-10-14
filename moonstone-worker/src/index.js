export default {
  async fetch(request, env, ctx) {
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    if (request.method !== 'POST') {
      return new Response('Method Not Allowed', { status: 405, headers: corsHeaders });
    }

    try {
      const data = await request.json();
      const { name, phone, location, details } = data;

      if (!name || !phone || !details) {
        return new Response(JSON.stringify({ error: 'Missing information' }), { 
          status: 400, 
          headers: corsHeaders 
        });
      }

      const logMessage = `
        Inquiry for Moonstone Construction:
        Name: ${name}
        Phone: ${phone}
        Location: ${location || 'Not provided'}
        Details: ${details}
      `;
      
      console.log(logMessage);

      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });

    } catch (err) {
      return new Response(JSON.stringify({ error: err.message }), { 
        status: 500, 
        headers: corsHeaders 
      });
    }
  },
};
