import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeLayoutModule } from './layout/home-layout/home-layout.module';
import { FormsModule } from '@angular/forms';
import { FeatureUserModule } from './features/user/user.module';
import { MatModalModule } from './material/modal/modal.module';
import { HttpClientModule } from '@angular/common/http';
import { FeatureUserDetailModule } from './features/user/components/detail/detail.module';
import { FeatureLoginModule } from './features/auth/login/login.module';

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
