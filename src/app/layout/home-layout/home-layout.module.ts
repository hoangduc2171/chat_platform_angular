import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeLayoutComponent } from './home-layout.component';
import { HeaderModule } from './header/header.module';
import { ContentModule } from './content/content.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './footer/footer.module';

@NgModule({
  declarations: [
    HomeLayoutComponent,
  ],
  imports: [
    CommonModule,
    HeaderModule, 
    ContentModule, 
    SidebarModule, 
    FooterModule,
  ],
  exports: [HomeLayoutComponent]
})
export class HomeLayoutModule { }
