import { Module, RequestMethod } from '@nestjs/common';
import { AngularUniversalModule } from '@nestjs/ng-universal';
import { join } from 'path';
import { AppServerModule } from '../src/main.server';
import { ReverseProxyMiddleware } from './middlewares/reverse-proxy.middleware';

@Module({
  imports: [
    AngularUniversalModule.forRoot({
      bootstrap: AppServerModule,
      viewsPath: join(process.cwd(), 'dist/argon-dashboard-angular/browser')
    }),
  ],
  controllers: []
})
export class AppModule {
  configure(consumer: import('@nestjs/common').MiddlewareConsumer) {
    consumer
      .apply(ReverseProxyMiddleware)
      .forRoutes({ path: 'kong', method: RequestMethod.ALL });
  }
}
