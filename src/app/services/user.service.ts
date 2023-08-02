import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment as ENV } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public static BASIC_INFORMATION_URL: string = `${ENV.BASE_URL}/basic_information.json`;

  constructor(
    private _httpClient: HttpClient
  ) { }

  public getBasicInformation(): Observable<any> {
    return this._httpClient.get(UserService.BASIC_INFORMATION_URL);
  }

}
