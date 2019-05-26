import {NgModule} from '@angular/core';

import {
    MatProgressBarModule,
    MatTabsModule,
    MatSlideToggleModule,
    MatCheckboxModule
} from '@angular/material';

@NgModule({
  exports: [
    MatSlideToggleModule,
    MatProgressBarModule,
    MatTabsModule,
    MatCheckboxModule
  ]
})
export class MaterialModule {}