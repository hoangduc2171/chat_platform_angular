import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FeatureUserModule } from './modules/user/user.module';
import { FeatureUserDetailModule } from './modules/user/components/detail/detail.module';
import { MatModalModule } from './shared/components/material/modal/modal.module';
import { FeatureLoginModule } from './modules/auth/login/login.module';
import { HomeLayoutModule } from './shared/components/layout/home-layout/home-layout.module';

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
    FeatureUserDetailModule,
    MatModalModule, 
    HttpClientModule,
    FeatureLoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
