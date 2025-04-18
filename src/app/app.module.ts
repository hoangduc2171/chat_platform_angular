import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeLayoutModule } from './layout/home-layout/home-layout.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FeatureUserModule } from './features/user/user.module';
import { FeatureUserDetailModule } from './features/user/detail.module';

@NgModule({
  declarations: [
    AppComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeLayoutModule,
    FormsModule,
    FeatureUserModule, 
    FeatureUserDetailModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
