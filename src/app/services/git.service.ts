import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const { Octokit } = require("@octokit/core");

const reposUrl = 'https://api.github.com/search/repositories?q=';
const commitsUrl = 'https://api.github.com/search/commits?q=repo:';

@Injectable()
export class GitService {
  constructor(private http: HttpClient) { }

  getRepos(searchText: string) {
    console.log(searchText);
      return this.http.get<any>(reposUrl+searchText);
    
  }
  async getCommits(repoId: string) {
    
    const octokit = new Octokit({
      application: "vnd.github.v3+json",
      auth: "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",
    });

    const { data } = await octokit.request(commitsUrl+repoId);
    return data;
  }
}

