import {NgModule} from '@angular/core';

import {
    MatProgressBarModule,
    MatCheckboxModule
} from '@angular/material';

@NgModule({
  exports: [
    MatProgressBarModule,
    MatCheckboxModule
  ]
})
export class MaterialModule {}