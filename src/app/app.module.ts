import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BsBreadcrumbsModule} from "./bs-breadcrumbs/bs-breadcrumbs.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, BsBreadcrumbsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
