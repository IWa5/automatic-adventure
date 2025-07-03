const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

const PORT = process.env.PORT || 3000;

// Simple proxy endpoint forwarding all requests to target URL specified in query param
app.use('/', (req, res, next) => {
  const target = req.query.url;
  if (!target) {
    return res.status(400).send('Missing "url" query parameter');
  }

  createProxyMiddleware({
    target,
    changeOrigin: true,
    pathRewrite: (path, req) => {
      // Remove / from path
      return '/';
    },
    onProxyReq: (proxyReq, req, res) => {
      // Optionally manipulate proxy request here
    }
  })(req, res, next);
});

app.listen(PORT, () => {
  console.log(`Corrosion proxy running on port ${PORT}`);
});