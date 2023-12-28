
import { Routes } from '@angular/router';
import { LoginComponent } from './unregisteredUser/login/login.component';
import { MainComponent } from './unregisteredUser/main/main.component';
import { StartComponent } from './unregisteredUser/start/start.component';
import { RegisterComponent } from './unregisteredUser/register/register.component';
import { TeamComponent } from './unregisteredUser/team/team.component';
import { PartnersComponent } from './unregisteredUser/partners/partners.component';
import { CharacteristicsComponent } from './unregisteredUser/characteristics/characteristics.component';
import { FeedComponent } from './registeredUser/feed/feed.component';
import { BodyComponent } from './registeredUser/body/body.component';


export const routes: Routes = [
    { path: '', component: BodyComponent },
    { path: 'login', component: LoginComponent },
    { path: 'start', component: StartComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'team', component: TeamComponent },
    { path: 'partners', component: PartnersComponent},
    { path: 'characteristics', component: CharacteristicsComponent},
    { path: 'feed', component: FeedComponent}
];