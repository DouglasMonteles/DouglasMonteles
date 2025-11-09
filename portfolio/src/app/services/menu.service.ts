import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import MenuItem from '../models/MenuItem';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  
  constructor(
    private _http: HttpClient,
  ) {}

  public findAll(): Observable<MenuItem[]> {
    return this._http.get<MenuItem[]>(`${environment.baseApiUrl}/menu/menu-items.json`);
  }

}
