import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LocalStorageService } from '@app/core/local-storage.service';

@Injectable()
export abstract class BaseAPIClass {
  // baseUrl: string;
  constructor(
    protected httpClient: HttpClient,
    protected localStorageService: LocalStorageService
  ) {}
  private getOptionsJSON() {
    let credentials = this.localStorageService.getItem('credentials');
    if (credentials) {
      credentials = JSON.parse(credentials);
    }
    // HttpHeaders
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        // Authorization: 'Bearer ' + credentials.data.token
      })
    };
    return httpOptions;
  }
  private getOptionsFormData() {
    let credentials = this.localStorageService.getItem('credentials');
    if (credentials) {
      credentials = JSON.parse(credentials);
    }
    // HttpHeaders
    const httpOptions = {
      headers: new HttpHeaders({
        // Authorization: 'Bearer ' + credentials.data.token
      })
    };
    return httpOptions;
  }

  getAll(baseUrl: string, filterObject?: any): Observable<any> {
    let queryString = '';
    if (filterObject) {
      const fitlerKeys: any[] = Object.keys(filterObject);
      if (fitlerKeys.length > 0) {
        queryString = '?';
      }
      fitlerKeys.forEach((key: any, index) => {
        if (filterObject[key] !== undefined && filterObject[key] !== null) {
          if (filterObject[key].toString().length) {
            queryString += `${key}=${filterObject[key]}&`;
          }
        }
      });
      if (
        fitlerKeys.length > 0 &&
        queryString[queryString.length - 1] === '&'
      ) {
        queryString = queryString.slice(0, -1);
      }
    }
    return this.httpClient
      .get(`${baseUrl}${queryString}`, this.getOptionsJSON())
      .pipe(
        map((body: any) => {
          return body;
        })
      );
  }

  getById(baseUrl: string, id: string, filterObject?: any): Observable<any> {
    let queryString = '';
    if (filterObject) {
      const fitlerKeys: any[] = Object.keys(filterObject);
      if (fitlerKeys.length > 0) {
        queryString = '?';
      }
      fitlerKeys.forEach((key: any, index) => {
        if (filterObject[key] !== undefined && filterObject[key] !== null) {
          if (filterObject[key].toString().length) {
            queryString += `${key}=${filterObject[key]}&`;
          }
        }
      });
      if (
        fitlerKeys.length > 0 &&
        queryString[queryString.length - 1] === '&'
      ) {
        queryString = queryString.slice(0, -1);
      }
    }
    return this.httpClient
      .get(`${baseUrl}/${id}${queryString}`, this.getOptionsJSON())
      .pipe(
        map((body: any) => {
          return body;
        })
      );
  }

  create(baseUrl: string, payload: any): Observable<any> {
    return this.httpClient.post(baseUrl, payload, this.getOptionsJSON()).pipe(
      map((body: any) => {
        return body;
      })
    );
  }

  update(baseUrl: string, id: string, payload: any): Observable<any> {
    const URL = id === '' || id === null ? `${baseUrl}` : `${baseUrl}/${id}`;
    return this.httpClient.put(URL, payload, this.getOptionsJSON()).pipe(
      map((body: any) => {
        return body;
      })
    );
  }

  delete(baseUrl: string, id: string): Observable<any> {
    return this.httpClient
      .delete(`${baseUrl}/${id}`, this.getOptionsJSON())
      .pipe(
        map((body: any) => {
          return body;
        })
      );
  }

  deleteAll(baseUrl: string): Observable<any> {
    return this.httpClient.delete(`${baseUrl}/all`, this.getOptionsJSON()).pipe(
      map((body: any) => {
        return body;
      })
    );
  }
  // Form Data
  createWithFormData(baseUrl: string, payload: any): Observable<any> {
    return this.httpClient
      .post(baseUrl, payload, this.getOptionsFormData())
      .pipe(
        map((body: any) => {
          return body;
        })
      );
  }

  updateWithFormData(
    baseUrl: string,
    id: string,
    payload: any
  ): Observable<any> {
    return this.httpClient
      .post(`${baseUrl}/${id}`, payload, this.getOptionsFormData())
      .pipe(
        map((body: any) => {
          return body;
        })
      );
  }
}
