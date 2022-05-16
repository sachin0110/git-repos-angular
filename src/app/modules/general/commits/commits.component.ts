import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { GitService } from '../../../services/git.service';

@Component({
  selector: 'app-commits',
  templateUrl: './commits.component.html',
  styleUrls: ['./commits.component.css'],
  providers: [GitService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommitComponent implements OnInit {
  repoId: string; // repository id which has been sent as parameter from repoComponent
  errorMessage: string = '';
  commitData: Array<any> = [];
  constructor(private route: ActivatedRoute, private cdr: ChangeDetectorRef, private _gitService: GitService) { }

  ngOnInit() {
    this.errorMessage = '';
    this.route.params.subscribe((params: Params) => {
      
      this.repoId = params['repoId'];
      this.getCommitsOfRepo(this.repoId);
    });
  }

  getCommitsOfRepo(repoId: string) {
    this._gitService.getCommits(repoId).then((commits: any) => {
      this.commitData = commits.items;
      this.cdr.detectChanges();
    }, error=>{
      this.errorMessage = error;
      this.cdr.detectChanges();
    });
  }

}
