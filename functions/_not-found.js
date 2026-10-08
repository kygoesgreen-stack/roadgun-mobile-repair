// Cloudflare Pages Function: /_not-found
// Next.js static export can leave a copy of the 404 page at out/_not-found,
// which Pages would serve with status 200 (a soft 404). scripts/fix-404.mjs
// deletes it when the build runs through `npm run build`; this covers builds
// that call `next build` directly. Same page, real 404 status.
export async function onRequest({ request, env }) {
  const res = await env.ASSETS.fetch(new URL("/__not-found__/", request.url).toString());
  return new Response(res.body, { status: 404, headers: res.headers });
}
