import { store } from './_lib.mjs';
export default async () => {
  const c = await store().get('content/current', { type: 'text' });
  if (!c) return new Response('{"error":"none"}', { status: 404, headers: { 'content-type': 'application/json', 'cache-control': 'no-store' } });
  return new Response(c, { headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' } });
};
export const config = { path: '/api/content' };
