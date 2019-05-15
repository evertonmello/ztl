import {NgModule} from '@angular/core';

import {
    MatProgressBarModule,
    MatTabsModule,
    MatCheckboxModule
} from '@angular/material';

@NgModule({
  exports: [
    MatProgressBarModule,
    MatTabsModule,
    MatCheckboxModule
  ]
})
export class MaterialModule {}