import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfileAbout } from '../models/ProfileAbout';
import { environment } from '../../environments/environment.development';

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

}
