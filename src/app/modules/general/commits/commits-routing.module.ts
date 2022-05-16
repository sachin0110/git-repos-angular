import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommitComponent } from './commits.component';

const routes: Routes = [
  { path: '', component: CommitComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommitRoutingModule { }
