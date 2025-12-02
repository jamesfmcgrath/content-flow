export async function POST(req) {
  try {
    const { idea } = await req.json();

    if (!idea || !idea.trim()) {
      return new Response(JSON.stringify({ error: 'Missing idea' }), {
        status: 400,
      });
    }

    if (!process.env.OPENAI_API_KEY) {
      return new Response(
        JSON.stringify({ error: 'Missing OPENAI_API_KEY env var' }),
        { status: 500 }
      );
    }

    const apiRes = await fetch('https://api.openai.com/v1/responses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini', // or "gpt-4o"
        input: idea,
        max_output_tokens: 800,
      }),
    });

    if (!apiRes.ok) {
      const errText = await apiRes.text();
      console.error('OpenAI error:', errText);
      return new Response(errText, { status: apiRes.status });
    }

    const data = await apiRes.json();

    const content = data.output?.[0]?.content?.[0]?.text?.trim() ?? '';

    return Response.json({ content });
  } catch (err) {
    console.error(err);
    return new Response(
      JSON.stringify({
        error: 'Server error',
        detail: err && err.message ? err.message : String(err),
      }),
      { status: 500 }
    );
  }
}
