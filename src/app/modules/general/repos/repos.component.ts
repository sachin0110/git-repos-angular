
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
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReposComponent {
  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;

  reposData: Array<any> = [];
  // initializing the search of Repos with default query
  searchText: string = 'tetris+language:assembly&sort=stars&order=desc'; 
  errorMessage: string = '';
  constructor(private _gitService: GitService, private router: Router, private cdr: ChangeDetectorRef) {

    // get repos based on default query, as soon as constructor is called
    this.getRepos(this.searchText);

  }

  getRepos(searchText: string) {
    // searchText can be entered from search box, if not entered, it picks the default query.
    this.errorMessage = '';
    this._gitService.getRepos(searchText).subscribe((repos: any) => {
      this.reposData = repos.items; // assignment of data from API response to the global variable
      this.cdr.detectChanges(); // for detecting the DOM changes
    },  error=>{ // error handling
      console.log(error);
      
      this.errorMessage = error;
      this.cdr.detectChanges();
    });
    
  }
  navigateToCommits(repoId: string) {
    this.router.navigate(["commits", repoId]);
  }

}