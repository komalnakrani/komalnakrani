export async function onRequest(context) {
  const url = new URL(context.request.url);
  const target = url.searchParams.get('url');

  if (!target) {
    return new Response('Missing target url query parameter', { status: 400 });
  }

  try {
    const targetUrl = new URL(target);
    const origin = targetUrl.origin;
    const baseHref = target.endsWith('/') ? target : target + '/';

    const resp = await fetch(target, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9'
      }
    });

    let html = await resp.text();
    
    // Inject <base href> right after <head> so all relative CSS, images, and links resolve to the source
    if (html.includes('<head>')) {
      html = html.replace('<head>', '<head><base href="' + baseHref + '">');
    } else if (html.includes('<head ')) {
      html = html.replace(/<head([^>]*)>/i, '<head><base href="' + baseHref + '">');
    }

    const newHeaders = new Headers(resp.headers);
    // Strip security headers that prevent embedding in an iframe
    newHeaders.delete('content-security-policy');
    newHeaders.delete('content-security-policy-report-only');
    newHeaders.delete('x-frame-options');
    newHeaders.set('content-type', 'text/html; charset=utf-8');
    newHeaders.set('access-control-allow-origin', '*');

    return new Response(html, {
      status: resp.status,
      headers: newHeaders
    });
  } catch (err) {
    return new Response('Proxy fetch error: ' + err.message, { status: 502 });
  }
}
