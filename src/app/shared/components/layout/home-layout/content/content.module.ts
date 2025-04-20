import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ContentComponent],
    imports: [
      CommonModule, 
      RouterModule
    ], 
    exports: [ContentComponent]
})
export class ContentModule { }
