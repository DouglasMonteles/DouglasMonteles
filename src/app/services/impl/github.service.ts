import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import GithubRepoInfo from 'src/app/types/GithubRepoInfo';
import GithubRepoLanguage from 'src/app/types/GithubRepoLanguage';
import GithubUserInfo from 'src/app/types/GithubUserInfo';
import IGithubService from '../github.service';

@Injectable({
  providedIn: 'root',
})
export class GithubService implements IGithubService {
  private readonly GITHUB_BASE_URL = 'https://api.github.com';

  private _http = inject(HttpClient);

  constructor() {}

  /**
   * Fetches the list of repositories for a given GitHub username.
   *
   * @param username - The username of the GitHub account.
   * @returns An array of repository information objects.
   */
  public getGithubRepoInfo(username: string): Observable<GithubRepoInfo[]> {
    return this._http.get<GithubRepoInfo[]>(
      `${this.GITHUB_BASE_URL}/users/${username}/repos`
    );
  }

  /**
   * Fetches the language usage of a repository for a given GitHub username.
   *
   * @param username - The username of the GitHub account.
   * @param repoName - The name of the repository.
   * @returns An object containing the language usage for the repository.
   */
  public getGithubRepoLanguage(
    username: string,
    repoName: string
  ): Observable<GithubRepoLanguage> {
    return this._http.get<GithubRepoLanguage>(
      `${this.GITHUB_BASE_URL}/repos/${username}/${repoName}/languages`
    );
  }

  /**
   * Fetches the user information for a given GitHub username.
   *
   * @param username - The username of the GitHub account.
   * @returns The user information for the given username.
   */
  public getGithubUserInfo(username: string): Observable<GithubUserInfo> {
    return this._http.get<GithubUserInfo>(
      `${this.GITHUB_BASE_URL}/users/${username}`
    );
  }
}
