import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { MatInputWarpperModule } from 'src/app/material/form/components/field-warpper/field-warpper.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ContentComponent],
    imports: [
      CommonModule, 
      MatInputWarpperModule,
      RouterModule
    ], 
    exports: [ContentComponent]
})
export class ContentModule { }
