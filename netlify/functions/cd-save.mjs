import { store, okPass, json, wait } from './_lib.mjs';
export default async req => {
  if (req.method !== 'POST') return json({ error: 'method' }, 405);
  let b; try { b = await req.json(); } catch (e) { return json({ error: 'bad json' }, 400); }
  if (!okPass(b.pass)) { await wait(900); return json({ error: 'Λάθος κωδικός' }, 401); }
  const s = store();
  if (b.action === 'login') return json({ ok: true });
  if (b.action === 'undo') {
    const prev = await s.get('content/prev', { type: 'text' }); if (!prev) return json({ error: 'Δεν υπάρχει προηγούμενη μορφή' }, 404);
    const cur = await s.get('content/current', { type: 'text' });
    const c = JSON.parse(prev); c.v = Date.now();
    await s.set('content/current', JSON.stringify(c)); if (cur) await s.set('content/prev', cur);
    return json({ ok: true, v: c.v });
  }
  if (b.action === 'publish') {
    const c = b.content; if (!c || typeof c !== 'object' || !c.site || !Array.isArray(c.services)) return json({ error: 'bad content' }, 400);
    const txt = JSON.stringify(c); if (txt.length > 4.5e6) return json({ error: 'Πολύ μεγάλο περιεχόμενο' }, 413);
    const cur = await s.get('content/current', { type: 'text' });
    if (cur) { await s.set('content/prev', cur); await s.set('history/' + new Date().toISOString().slice(0, 19).replace(/:/g, '-') + '.json', cur); }
    c.v = Date.now(); await s.set('content/current', JSON.stringify(c));
    return json({ ok: true, v: c.v });
  }
  return json({ error: 'action' }, 400);
};
export const config = { path: '/api/save' };
