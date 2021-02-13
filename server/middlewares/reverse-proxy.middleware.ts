import { NestMiddleware } from '@nestjs/common';
import * as proxy from 'http-proxy-middleware';

export class ReverseProxyMiddleware implements NestMiddleware {
  private proxy = proxy({
    target: 'http://localhost:8001',
    pathRewrite: {
      '/api/kong': ''
    },
    changeOrigin: true,
    secure: false,
    onProxyReq: (proxyReq, req, res) => {
      console.log(
        `[NestMiddleware]: Proxying ${req.method} request originally made to '${req.originalUrl}'...`
      );
    },
    onError: (err, req, res) => {
      console.log('error-----')
      console.log(err)
    }
  });

  use(req: Request, res: Response, next: () => void) {
    this.proxy(req, res, next);
  }
}
