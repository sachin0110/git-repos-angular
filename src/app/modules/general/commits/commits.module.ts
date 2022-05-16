import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommitComponent } from './commits.component';
import { CommitRoutingModule } from './commits-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CommitRoutingModule
  ],
  exports: [
  ],
  declarations: [
    // CommitComponent
  ],
  providers: [
  ],
  
})
export class CommitModule { }