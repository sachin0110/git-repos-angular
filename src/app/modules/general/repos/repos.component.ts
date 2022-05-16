
import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  ViewChild,
  TemplateRef,
} from '@angular/core';
import { Router } from '@angular/router';
import { GitService } from '../../../services/git.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css'],
  providers: [GitService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `

    `,
  ]
})
export class ReposComponent {
  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;

  reposData: Array<any> = [];
  searchText: string = 'tetris+language:assembly&sort=stars&order=desc';
  errorMessage: string = '';
  constructor(private _gitService: GitService, private router: Router, private cdr: ChangeDetectorRef) {

    this.getRepos(this.searchText);
  }

  getRepos(searchText: string) {
    this.errorMessage = '';
    this._gitService.getRepos(searchText).subscribe((repos: any) => {
      this.reposData = repos.items;
      this.cdr.detectChanges();
    },  error=>{
      this.errorMessage = error;
      this.cdr.detectChanges();
    });
    
  }
  navigateToCommits(repoId: string) {
    this.router.navigate(["commits", repoId]);
  }

}