import { store, okPass, json, wait } from './_lib.mjs';
export default async req => {
  if (req.method !== 'POST') return json({ error: 'method' }, 405);
  let b; try { b = await req.json(); } catch (e) { return json({ error: 'bad json' }, 400); }
  if (!okPass(b.pass)) { await wait(900); return json({ error: 'Λάθος κωδικός' }, 401); }
  const m = /^data:(image\/(webp|jpeg|png));base64,(.+)$/.exec(b.data || ''); if (!m) return json({ error: 'Μόνο εικόνες' }, 400);
  const buf = Buffer.from(m[3], 'base64'); if (buf.length > 5.5e6) return json({ error: 'Πολύ μεγάλη εικόνα' }, 413);
  const key = Date.now().toString(36) + Math.random().toString(36).slice(2, 7) + '.' + (m[2] === 'jpeg' ? 'jpg' : m[2]);
  await store().set('img/' + key, buf, { metadata: { type: m[1] } });
  return json({ ok: true, url: '/api/img/' + key });
};
export const config = { path: '/api/upload' };
