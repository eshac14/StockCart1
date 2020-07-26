import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login';
import { WelcomeComponent } from './welcome/welcome.component';
import { OptionlistComponent } from './sectorlist/optionlist.component';
import { AuthGuard } from './_helpers';

const routes: Routes = [
    { path: '', component: WelcomeComponent },
    { path: 'welcome', component: WelcomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    {path:'sectorlist', component:OptionlistComponent },
   
    

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);