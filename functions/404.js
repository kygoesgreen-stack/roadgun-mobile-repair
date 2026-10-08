// Cloudflare Pages Function: /404
// Pages serves out/404.html at the URL /404 with status 200, which Google
// treats as a soft 404. Answer it with the same page and a real 404 status.
// Every other unknown URL already gets 404.html with a 404 from Pages itself.
export async function onRequest({ request, env }) {
  const res = await env.ASSETS.fetch(new URL("/__not-found__/", request.url).toString());
  return new Response(res.body, { status: 404, headers: res.headers });
}
