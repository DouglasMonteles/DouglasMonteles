import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  
  public save(key: string, value: object): void {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error("[LocalStorageService] Error on save object: ", e);
    }
  }

  public findByKey<T>(key: string): T | null {
    try {
      const valueStr = localStorage.getItem(key);
      
      if (valueStr !== null) {
        return JSON.parse(valueStr);
      } else {
        return null;
      }
    } catch (e) {
      console.error("[LocalStorageService] Error on save object: ", e);
      throw e;
    }
  }

}
