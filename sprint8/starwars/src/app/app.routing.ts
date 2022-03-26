import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule} from "@angular/router";
import { AuthGuard } from "./auth/guards/auth.guard.guard";
import { LoginComponent } from "./auth/login/login.component";
import { SignupComponent } from "./auth/signup/signup.component";

//components
import { HomeComponent } from "./components/home/home.component";
import { ShipInfoComponent } from "./components/ship-info/ship-info.component";
import { StarshipsComponent } from "./components/starships/starships.component";
import { WelcomeComponent } from "./components/welcome/welcome.component";


const appRoutes:Routes = [
  {path: '', component:WelcomeComponent},
  {path: 'home', component:HomeComponent},
  {path: 'starships/:id', component: ShipInfoComponent},
  {
    path: 'starships', component:StarshipsComponent,
    canActivate: [AuthGuard]
  },
  {path: 'login', component:LoginComponent},
  {path: 'signup', component:SignupComponent},
  {path: '**', component:HomeComponent},
]

export const appRoutingProviders:any[] =[];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);