import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { RouterModule, provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { AuthModule } from '@auth0/auth0-angular';
import { HttpClientModule } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    importProvidersFrom(
      RouterModule.forRoot(routes),
      HttpClientModule,
      AuthModule.forRoot({
        domain: 'dev-d4o8fao1p2f3j2vx.us.auth0.com',
        clientId: 'jFNigH5qyd14AgyBt97XaPl5x4XeLzEN',
        authorizationParams: {
          redirect_uri: 'http://localhost:4200',
        },
      }),
    )]
};
