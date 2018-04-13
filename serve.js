const http = require('http');
const path = require('path');
const fs = require('fs');

const basePath = 'dist';

const html = (name) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <title>profile - ${name}</title>
  <script src="/dll/vendor.dll.js"></script>
  <style>
  body, html, input {
    padding: 0;
    margin: 0;
    border: 0;
  }
  body {
    padding: 10px;
  }
  </style>
</head>
<body>
  <div id="root"></div>
  <script src="/bundle/${name}.js"></script>
</body>
</html>
`;

const contentTypes = {
  '.js': 'text/javascript',
  '.map': 'text/javascript',
  '.css': 'text/css',
};

const server = http.createServer((req, res) => {
  if (req.method !== 'GET') {
    res.statusCode = 405;
    res.setHeader('Allow', 'GET');
    res.setHeader('Content-Length', '0');
    res.end();
    return;
  }

  const [_, type, ...rest] = req.url.split('/');
  switch (type) {
    case 'page': {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.write(html(rest[0]));
      res.end();
    } return;
    case 'style':
    case 'dll':
    case 'bundle': {
      const source = path.join(basePath, type, ...rest);
      const ext = path.extname(source);
      const ct = contentTypes[ext] || 'text/plain';
      const f = fs.createReadStream(source);
      f.on('open', () => {
        res.statusCode = 200;
        res.setHeader('Content-Type', ct);
      });
      f.on('data', (chunk) => res.write(chunk));
      f.on('end', () => res.end());
      f.on('error', () => {
        res.statusCode = 404;
        res.end();
      });
    } return;
    default: {
      res.statusCode = 404;
      res.end();
    }
  }
});

console.log('server starting');
server.listen(9090);

