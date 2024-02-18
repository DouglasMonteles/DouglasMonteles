import { Component, OnInit, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { GithubService } from 'src/app/services/impl/github.service';
import GithubRepoInfo from 'src/app/types/GithubRepoInfo';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects$: Observable<GithubRepoInfo[]>;

  private _githubService: GithubService = inject(GithubService);

  constructor() {
    this.projects$ = this._githubService
      .getGithubRepoInfo(environment.GITHUB_USERNAME)
      .pipe(
        map((obj) =>
          obj.map((it) => {
            it.languages$ = this._githubService
              .getGithubRepoLanguage(environment.GITHUB_USERNAME, it.name)
              .pipe(map(obj => Object.keys(obj)));
            return it;
          })
        )
      );
  }

  ngOnInit(): void {}
}
