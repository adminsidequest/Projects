// Edge middleware: redirect the bare root to a locale based on the visitor's
// Accept-Language, server-side, so there is no client-side flash and crawlers
// never see "/" as a separate indexable page. Runs only on "/".
export const config = { matcher: '/' };

export default function middleware(request) {
  const accept = request.headers.get('accept-language') || '';
  const primary = (accept.split(',')[0] || '').trim().toLowerCase();
  const url = new URL(request.url);
  url.pathname = primary.startsWith('es') ? '/es' : '/en';
  return Response.redirect(url.toString(), 307);
}
