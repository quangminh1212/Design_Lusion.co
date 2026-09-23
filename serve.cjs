const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const root = __dirname;
const port = Number(process.env.PORT || 4173);
const types = new Map([
  ['.html', 'text/html; charset=utf-8'],
  ['.css', 'text/css; charset=utf-8'],
  ['.js', 'text/javascript; charset=utf-8'],
  ['.json', 'application/json; charset=utf-8'],
  ['.svg', 'image/svg+xml'],
  ['.png', 'image/png'],
  ['.jpg', 'image/jpeg'],
  ['.jpeg', 'image/jpeg'],
  ['.webp', 'image/webp'],
  ['.avif', 'image/avif'],
  ['.ico', 'image/x-icon'],
  ['.woff', 'font/woff'],
  ['.woff2', 'font/woff2'],
  ['.mp4', 'video/mp4'],
  ['.webm', 'video/webm'],
  ['.ogg', 'audio/ogg'],
  ['.buf', 'application/octet-stream'],
  ['.exr', 'application/octet-stream'],
  ['.wasm', 'application/wasm']
]);

function resolveFile(pathname) {
  const decoded = decodeURIComponent(pathname);
  const relative = decoded.replace(/^\/+/, '');
  let file = path.resolve(root, relative || 'index.html');
  if (file !== root && !file.startsWith(root + path.sep)) return null;
  if (fs.existsSync(file) && fs.statSync(file).isDirectory()) {
    file = path.join(file, 'index.html');
  } else if (!path.extname(file)) {
    file = path.join(file, 'index.html');
  }
  return file;
}

http.createServer((request, response) => {
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    response.writeHead(405, { Allow: 'GET, HEAD' }).end('Method Not Allowed');
    return;
  }

  let pathname;
  try {
    pathname = new URL(request.url, 'http://localhost').pathname;
  } catch {
    response.writeHead(400).end('Bad Request');
    return;
  }

  let file;
  try {
    file = resolveFile(pathname);
  } catch {
    response.writeHead(400).end('Bad Request');
    return;
  }
  if (!file) {
    response.writeHead(403).end('Forbidden');
    return;
  }
  fs.stat(file, (error, stat) => {
    if (error || !stat.isFile()) {
      response.writeHead(404).end('Not Found');
      return;
    }

    const headers = {
      'Content-Type': types.get(path.extname(file).toLowerCase()) || 'application/octet-stream',
      'Accept-Ranges': 'bytes',
      'X-Content-Type-Options': 'nosniff'
    };
    const range = request.headers.range;
    if (range && path.extname(file).toLowerCase() === '.mp4') {
      const match = /^bytes=(\d*)-(\d*)$/.exec(range);
      if (match) {
        const start = match[1]
          ? Number(match[1])
          : Math.max(0, stat.size - Number(match[2]));
        const end = match[1] && match[2]
          ? Math.min(Number(match[2]), stat.size - 1)
          : stat.size - 1;
        if (start <= end && start < stat.size) {
          headers['Content-Range'] = `bytes ${start}-${end}/${stat.size}`;
          headers['Content-Length'] = end - start + 1;
          response.writeHead(206, headers);
          if (request.method === 'HEAD') response.end();
          else fs.createReadStream(file, { start, end }).pipe(response);
          return;
        }
      }
      response.writeHead(416, { 'Content-Range': `bytes */${stat.size}` }).end();
      return;
    }

    headers['Content-Length'] = stat.size;
    response.writeHead(200, headers);
    if (request.method === 'HEAD') response.end();
    else fs.createReadStream(file).pipe(response);
  });
}).listen(port, '127.0.0.1', () => {
  console.log(`Lusion local clone available at http://127.0.0.1:${port}`);
});
