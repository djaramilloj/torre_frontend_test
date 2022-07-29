import { NgModule } from "@angular/core";
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

/**
 * NgModule that includes all Material modules that are required to serve the demo-app.
 */
@NgModule({
  exports: [
    MatProgressBarModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class MaterialModule {}
