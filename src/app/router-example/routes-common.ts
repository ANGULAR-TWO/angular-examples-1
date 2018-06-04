import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

// Route Configuration
export const routes: Routes = [
  { path: 'home', component:HomeComponent },
  { path: 'about-us', component: AboutComponent },
  { path: '', redirectTo:'/home' ,pathMatch:'full'},
  { path:'**',component:AboutComponent}
];

// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);