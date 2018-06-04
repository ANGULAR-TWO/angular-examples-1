import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpExampleModule} from './http-example/http-example.module'

import { AppComponent } from './app.component';
import { RouterExampleModule } from './router-example/router-example.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, HttpExampleModule, RouterExampleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
