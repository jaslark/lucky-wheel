import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseAPIClass } from '@app/core/class/baseAPI.class';
import { API_ENDPOINT } from '@app/core/constants';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LocalStorageService } from '../local-storage.service';

@Injectable()
export class DashboardService extends BaseAPIClass {
  constructor(
    protected httpClient: HttpClient,
    protected localStorageService: LocalStorageService
  ) {
    super(httpClient, localStorageService);
  }

  verifyCodeNumberForCustomer(id: string) {
    return this.getById(`/verify-code`, id).pipe(
      map((body: any) => {
        return body;
      })
    );
  }

  getActiveEvent() {
    return this.getAll(`/event/current-active/2`).pipe(
      map((body: any) => {
        return body;
      })
    );
  }

  authenticationAccount(params: any) {
    return this.create(`/auth/register`, params).pipe(
      map((body: any) => {
        return body;
      })
    );
  }

  registerInformationCustomer(params: any) {
    return this.createWithFormData(`/register-customer`, params).pipe(
      map((body: any) => {
        return body;
      })
    );
  }

  randomPrizeEachCustomer(params: any) {
    return this.create(`/random`, params).pipe(
      map((body: any) => {
        return body;
      })
    );
  }

  getCurrentStep(params: any) {
    return this.create(`/winner/current-step`, params).pipe(
      map((body: any) => {
        return body;
      })
    );
  }

  checkSMSCode(params: any) {
    return this.create(`/check-sms-code`, params).pipe(
      map((body: any) => {
        return body;
      })
    );
  }

  getListWinner(event_id) {
    return this.getById('/event/get-list-winner', event_id).pipe(
      map((body: any) => {
        return body;
      })
    );
  }
}
