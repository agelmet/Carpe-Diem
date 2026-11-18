// New articles written in the admin get a real server-rendered page (Google & AI crawlers see the text).
import { store } from './_lib.mjs';
import { doc } from '../../assets/js/render.mjs';
export default async req => {
  const slug = new URL(req.url).searchParams.get('a') || '';
  const c = await store().get('content/current', { type: 'json' });
  const a = c && slug ? (c.articles || []).find(x => x.slug === slug && x.published !== false) : null;
  if (!a) return Response.redirect(new URL('/arthrografia', req.url), 302);
  if (a.static) return Response.redirect(new URL('/arthra/' + a.slug, req.url), 301);
  const html = doc('arthro', c, '', { slug, icons: '<link rel="icon" href="/favicon.ico?v=cd2" sizes="48x48"><link rel="icon" href="/assets/icons/favicon.svg?v=cd2" type="image/svg+xml">', ver: c.v });
  return new Response(html, { headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'public, max-age=0, must-revalidate' } });
};
export const config = { path: '/arthro.html' };
