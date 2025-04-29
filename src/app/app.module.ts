import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FeatureUserModule } from './modules/user/user.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from './modules/auth/auth.module';
import { HomeLayoutModule } from './shared/layout/home-layout/home-layout.module';
import { MaterialsModule } from './shared/materials/materials.module';
import { AppLoading } from './shared/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    AppLoading
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    FeatureUserModule, 
    HttpClientModule,
    MaterialsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
