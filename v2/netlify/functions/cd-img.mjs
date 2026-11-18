import { store } from './_lib.mjs';
export default async (req, ctx) => {
  const key = (ctx.params && ctx.params.key) || new URL(req.url).pathname.split('/').pop();
  if (!/^[a-z0-9]+\.(webp|jpg|png)$/.test(key)) return new Response('not found', { status: 404 });
  const r = await store().getWithMetadata('img/' + key, { type: 'arrayBuffer' });
  if (!r || !r.data) return new Response('not found', { status: 404 });
  return new Response(r.data, { headers: { 'content-type': (r.metadata && r.metadata.type) || 'image/webp', 'cache-control': 'public, max-age=31536000, immutable' } });
};
export const config = { path: '/api/img/:key' };
