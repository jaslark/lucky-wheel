import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseAPIClass } from '@app/core/class/baseAPI.class';
import { API_ENDPOINT } from '@app/core/constants';
import { map } from 'rxjs/operators';
import { LocalStorageService } from '../local-storage.service';

@Injectable()
export class HelperService extends BaseAPIClass {
  constructor(
    protected httpClient: HttpClient,
    protected localStorageService: LocalStorageService
  ) {
    super(httpClient, localStorageService);
  }
  // COUNTRY
  getListCountry() {
    return this.getAll(API_ENDPOINT.MASTER_DATA.COUNTRY).pipe(
      map((body: any) => {
        return body;
      })
    );
  }
  getListState(id: any, params?: any) {
    return this.getAll(
      `${API_ENDPOINT.MASTER_DATA.COUNTRY}/${id}/state`,
      params
    ).pipe(
      map((body: any) => {
        return body;
      })
    );
  }
  // CURRERNCY SYSTEM
  getListCurrencyOption() {
    return this.getAll(`${API_ENDPOINT.MASTER_DATA.CURRENCY}/reference`).pipe(
      map((body: any) => {
        return body;
      })
    );
  }
  // CURRERNCY DEFAULT
  getDefaultCurrency() {
    const credentials = this.localStorageService.getItem('credentials');
    if (credentials) {
      const config = JSON.parse(credentials)['data']['config'];
      const default_currency = config.currency_code;
      return default_currency || '$';
    }
    return '$';
  }
  getDefaultCurrencyId() {
    const credentials = this.localStorageService.getItem('credentials');
    if (credentials) {
      const config = JSON.parse(credentials)['data']['config'];
      const default_currency = config.currency_id;
      return default_currency || 'USD';
    }
    return 'USD';
  }
  getListWarehouseMe() {
    let avail_WH = [];
    const credentials = this.localStorageService.getItem('credentials');
    if (credentials) {
      const listWH = JSON.parse(credentials)['data']['sites'];
      const user = JSON.parse(credentials)['data']['user'];
      if (user.is_manage_global) {
        avail_WH = [...[{ id: 'ALL', name: 'All Locations' }], ...listWH];
      } else {
        avail_WH = listWH;
      }
      return avail_WH;
    }
  }
  checkIsGlobalManage() {
    const credentials = this.localStorageService.getItem('credentials');
    if (credentials) {
      const user = JSON.parse(credentials)['data']['user'];
      return user.is_manage_global;
    }
    return 0;
  }
  // Export Document
  exportDocument(file: any, fileName: any) {
    return;
  }
  exportDocumentWithoutDownload(file: any) {
    return;
  }

  fetchDiscountType() {
    return this.getAll(`${API_ENDPOINT.MASTER_DATA.DISCOUNT_TYPE}`).pipe(
      map((body: any) => {
        return body;
      })
    );
  }

  fetchBaseExchangeRate(params: any) {
    return this.getAll(
      `${API_ENDPOINT.MASTER_DATA.CURRENCY}/reference/base-exchange-rate`,
      params
    ).pipe(
      map((body: any) => {
        return body;
      })
    );
  }

  fetchListWarehouse(params: any) {
    return this.getAll(
      `${API_ENDPOINT.MASTER_DATA.WAREHOUSE_STORE}/reference`,
      params
    ).pipe(
      map((body: any) => {
        return body;
      })
    );
  }
}
