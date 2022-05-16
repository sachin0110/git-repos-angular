import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReposComponent } from './modules/general/repos/repos.component';

const routes: Routes = [
  { path: '', component: ReposComponent },
  {
    path: 'commits/:repoId',
    loadChildren: () => import('./modules/general/commits/commits.module') // lazy loading commits component route
      .then(mod => mod.CommitModule)
  },
  {
    path: 'repos',
    loadChildren: () => import('./modules/general/repos/repos.module') // lazy loading repos component route
      .then(mod => mod.ReposModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
