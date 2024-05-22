
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
import { PlacementsComponent } from './registeredUser/placements/placements.component';
import { ProfileComponent } from './registeredUser/profile/profile.component';
import { TrackLibraryComponent } from './registeredUser/track-library/track-library.component';
import { PurchasesComponent } from './registeredUser/purchases/purchases.component';
import { HistoryComponent } from './registeredUser/history/history.component';
import { ResourcesComponent } from './registeredUser/resources/resources.component';
import { ConfigurationComponent } from './registeredUser/configuration/configuration.component';
import { SupportComponent } from './registeredUser/support/support.component';
import { MarketPlaceComponent } from './registeredUser/market-place/market-place.component';


export const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'login', component: LoginComponent },
    { path: 'start', component: StartComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'team', component: TeamComponent },
    { path: 'partners', component: PartnersComponent},
    { path: 'characteristics', component: CharacteristicsComponent},
    { path: 'feed', component: FeedComponent},
    { path: 'placements', component: PlacementsComponent},
    { path: 'marketPlace', component: MarketPlaceComponent},
    { path: 'profile', component: ProfileComponent},
    { path: 'trackLibrary', component: TrackLibraryComponent},
    { path: 'purchases', component: PurchasesComponent},
    { path: 'history', component: HistoryComponent},
    { path: 'resources', component: ResourcesComponent},
    { path: 'configuration', component: ConfigurationComponent},
    { path: 'support', component: SupportComponent},
];