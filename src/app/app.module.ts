import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeLayoutModule } from './shared/layout/home-layout/home-layout.module';
import { MaterialsModule } from './shared/materials/materials.module';
import { AppLoading } from './shared/loading/loading.component';
import { PartnerDetailComponent } from './modules/partners/partner-detail/partner-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AppLoading,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  title = "Chat platform";
}
