import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable, shareReplay } from 'rxjs';
import { ProfileAbout } from '../models/ProfileAbout';
import { environment } from '../../environments/environment.development';
import { ProfessionalExperience } from '../models/ProfessionalExperience';
import { SocialMedia } from '../models/SocialMedia';
import { GithubUserProfile } from '../models/GithubUserProfile';
import GithubUserRepository from '../models/GithubUserRepository';
import GithubLanguageRepository from '../models/GithubLanguageRepository';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private readonly SORT_BY: string = "update";
  private readonly ITEMS_PER_PAGE: number = 10;

  private languageCache = new Map<string, Observable<GithubLanguageRepository>>();
  
  constructor(
    private _http: HttpClient,
  ) {}

  public about(): Observable<ProfileAbout> {
    return this._http.get<ProfileAbout>(`${environment.baseApiUrl}/profile/about.json`);
  }

  public experience(): Observable<ProfessionalExperience[]> {
    return this._http.get<ProfessionalExperience[]>(`${environment.baseApiUrl}/profile/professional-experience.json`);
  }

  public socialMedia(): Observable<SocialMedia[]> {
    return this._http.get<SocialMedia[]>(`${environment.baseApiUrl}/profile/social-media.json`);
  }

  public githubProfile(username: string): Observable<GithubUserProfile> {
    return this._http.get<GithubUserProfile>(`${environment.githubApiUrl}/users/${username}`);
  }

  public githubRepositories(username: string, page: number, per_page: number = this.ITEMS_PER_PAGE, sort: string = this.SORT_BY): Observable<Array<GithubUserRepository>> {
    return this._http.get<Array<GithubUserRepository>>(`${environment.githubApiUrl}/users/${username}/repos`, {
      params: {
        page,
        sort,
        per_page,
      }
    });
  } 

  public githubRepositoryLanguage(repositoryName: string): Observable<GithubLanguageRepository> {
    const cacheKey = `${environment.githubUsername}/${repositoryName}`;

    if (!this.languageCache.has(cacheKey)) {
      const request$ = this._http
        .get<GithubLanguageRepository>(`${environment.githubApiUrl}/repos/${environment.githubUsername}/${repositoryName}/languages`)
        .pipe(shareReplay(1));

      this.languageCache.set(cacheKey, request$);
    }

    return this.languageCache.get(cacheKey) ?? EMPTY;
  }

}
