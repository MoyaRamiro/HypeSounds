import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { AuthModule } from '@auth0/auth0-angular';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err))
  {
    providers:[
      AuthModule.forRoot({
        domain: 'dev-d4o8fao1p2f3j2vx.us.auth0.com',
        clientId: 'jFNigH5qyd14AgyBt97XaPl5x4XeLzEN',
        authorizationParams: {
          redirect_uri: 'http://localhost:4200',
        },
      }),
    ]
  };
