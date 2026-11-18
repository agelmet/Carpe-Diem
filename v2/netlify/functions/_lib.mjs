// Carpe Diem admin backend — Netlify Functions + Netlify Blobs. No deploy per edit, 0 credits.
import { getStore } from '@netlify/blobs';
import { createHash } from 'node:crypto';
export const store = () => getStore({ name: 'carpediem', consistency: 'strong' });
const HASH = '835db1232c39bd29121c55fb2eb683c862b1ab1ac6b79fd528822d28549d3e06';
export function okPass(p) {
  const env = process.env.ADMIN_PASS;
  if (env) return typeof p === 'string' && p === env;
  return typeof p === 'string' && createHash('sha256').update(p).digest('hex') === HASH;
}
export const json = (o, s = 200) => new Response(JSON.stringify(o), { status: s, headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' } });
export const wait = ms => new Promise(r => setTimeout(r, ms));
