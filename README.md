# Corrosion Proxy Minimal

This is a minimal Corrosion-like proxy backend implementation.
Deploy on Render or any Node.js host and query it like:

```
https://yourdomain.com/?url=https://targetsite.com
```

It will proxy requests to the target URL specified in the `url` query param.