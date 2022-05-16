import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReposComponent } from './repos.component';
import { ReposRoutingModule } from './repos-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ReposRoutingModule
  ],
  exports: [
  ],
  declarations: [
    // ReposComponent
  ],
  providers: [
  ],
})
export class ReposModule { }