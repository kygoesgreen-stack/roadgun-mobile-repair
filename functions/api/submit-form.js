export async function onRequestPost(context) {
  const { request, env } = context;
  const webhookUrl = env.N8N_WEBHOOK_URL;

  try {
    const body = await request.text();
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
    });
    return new Response(JSON.stringify({ ok: res.ok }), {
      status: res.ok ? 200 : 502,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ ok: false, error: "proxy_failed" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
