const http = require('http');

const TARGET_PORT = 3001;
const PROXY_PORT = 3002;

const server = http.createServer((clientReq, clientRes) => {
  const options = {
    hostname: '127.0.0.1',
    port: TARGET_PORT,
    path: clientReq.url,
    method: clientReq.method,
    headers: clientReq.headers,
  };

  const proxyReq = http.request(options, (proxyRes) => {
    clientRes.writeHead(proxyRes.statusCode, proxyRes.headers);
    proxyRes.pipe(clientRes, { end: true });
  });

  proxyReq.on('error', (err) => {
    console.error('Proxy error:', err.message);
    clientRes.writeHead(502, { 'Content-Type': 'text/plain' });
    clientRes.end('Proxy error: Next.js dev server on port 3001 not responding');
  });

  clientReq.pipe(proxyReq, { end: true });
});

server.listen(PROXY_PORT, '0.0.0.0', () => {
  console.log(`Port proxy active: http://localhost:${PROXY_PORT} -> http://localhost:${TARGET_PORT}`);
});
