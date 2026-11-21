// Carpe Diem admin backend — Netlify Functions + Netlify Blobs. No deploy per edit, 0 credits.
import { getStore } from '@netlify/blobs';
import { createHash } from 'node:crypto';
export const store = () => getStore({ name: 'carpediem', consistency: 'strong' });
const HASH = 'b03c6c619ac37772d173ffd4f2505fcd3dbe43f519e6ea29ab7988a4b3e51304';
export function okPass(p) {
  const env = process.env.ADMIN_PASS;
  if (env) return typeof p === 'string' && p === env;
  return typeof p === 'string' && createHash('sha256').update(p).digest('hex') === HASH;
}
export const json = (o, s = 200) => new Response(JSON.stringify(o), { status: s, headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' } });
export const wait = ms => new Promise(r => setTimeout(r, ms));
