import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfileAbout } from '../models/ProfileAbout';
import { environment } from '../../environments/environment.development';
import { ProfessionalExperience } from '../models/ProfessionalExperience';
import { SocialMedia } from '../models/SocialMedia';
import { GithubUserProfile } from '../models/GithubUserProfile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  
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

}
