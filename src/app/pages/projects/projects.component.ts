import { AfterContentInit, Component, inject } from '@angular/core';
import { BehaviorSubject, map, merge, startWith, switchMap, tap } from 'rxjs';
import { GithubService } from 'src/app/services/impl/github.service';
import GithubFilter from 'src/app/types/GithubFilter';
import GithubPagination from 'src/app/types/GithubPagination';
import GithubRepoInfo from 'src/app/types/GithubRepoInfo';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements AfterContentInit {
  private _githubService: GithubService = inject(GithubService);

  projects: GithubRepoInfo[] = [];

  filters: GithubFilter = {
    languages: [],
    orderByMostRecent: true,
    onlyWithDescription: false,
  };

  pagination: GithubPagination = {
    page: {
      perPage: 12,
      actual: new BehaviorSubject<number>(1),
    },
    totalItems: 0,
  };

  isLoading: boolean = false;

  constructor() {}

  ngAfterContentInit(): void {
    merge(this.pagination.page.actual)
    .pipe(
      startWith({}),
      switchMap(() => {
        // loading...
        this.isLoading = true;
        return this._githubService
          .getGithubRepoInfo(environment.GITHUB_USERNAME, this.pagination)
          .pipe(
            map((repos) => this.fetchRepoLanguages(repos)),
            map((repos) => this.applyFilters(repos)),
            tap((repos) => (this.pagination.totalItems = repos.length))
          );
      }),
      map((repos) => {
        // loaded
        this.isLoading = false;

        if (repos === null || repos.length === 0) {
          this.pagination.page.actual.next(1);
          return [];
        }

        return repos;
      })
    )
    .pipe(tap(console.log))
    .subscribe({
      next: (data) => this.projects = data,
    });
  }

  handleChangePage(page: number): void {
    console.log(page)
    this.pagination.page.actual.next(page);
  }

  /**
   * Fetches the list of languages used in the given list of repos.
   *
   * @param repos - the list of repos to fetch languages for
   * @returns the list of repos with their language information included
   */
  private fetchRepoLanguages(repos: GithubRepoInfo[]): GithubRepoInfo[] {
    return repos.map((repo) => {
      repo.languages$ = this._githubService
        .getGithubRepoLanguage(environment.GITHUB_USERNAME, repo.name)
        .pipe(map((languages) => Object.keys(languages)));
      return repo;
    });
  }

  private applyFilters(repos: GithubRepoInfo[]): GithubRepoInfo[] {
    if (this.filters.onlyWithDescription) {
      repos = repos.filter((repo) => repo.description);
    }
    return repos;
  }

}
