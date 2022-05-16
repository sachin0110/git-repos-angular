import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommitComponent } from './modules/general/commits/commits.component';

import { ReposComponent } from './modules/general/repos/repos.component';

const routes: Routes = [
  { path: '', component: ReposComponent },
  {
    path: 'commits/:repoId',
    loadChildren: () => import('./modules/general/commits/commits.module')
      .then(mod => mod.CommitModule)
  },
  {
    path: 'repos',
    loadChildren: () => import('./modules/general/repos/repos.module')
      .then(mod => mod.ReposModule)
  },
  // { path: 'repos', component: ReposComponent },
  // { path: 'commits', component: CommitComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
