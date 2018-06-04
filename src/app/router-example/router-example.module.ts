import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { RouterModule,Router,Route } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NavigationComponent } from './navigation/navigation.component';
import { Routes ,RouterModule} from '@angular/router';
import { routing } from './routes-common';
import { RouterMainComponent } from './router-main/router-main.component';
//import { routes } from './routes-common';


@NgModule({
  imports: [
    CommonModule, routing
  ],
  declarations: [ 
    HomeComponent,
    AboutComponent,
    NavigationComponent,
    RouterMainComponent
  ],
  exports:[
    RouterMainComponent]
})
export class RouterExampleModule { }
