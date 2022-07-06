import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseAPIClass } from '@app/core/class/baseAPI.class';
import { LocalStorageService } from '../local-storage.service';
import { API_ENDPOINT } from '@app/core/constants';
import { map } from 'rxjs/operators';

@Injectable()
export class UploadDataService extends BaseAPIClass {
  constructor(
    protected httpClient: HttpClient,
    protected localStorageService: LocalStorageService
  ) {
    super(httpClient, localStorageService);
  }
  uploadCostControl(params: any) {
    return this.createWithFormData(
      API_ENDPOINT.REPORT_UPLOAD.COST_CONTROL,
      params
    ).pipe(
      map((body: any) => {
        return body;
      })
    );
  }
  uploadWMS(params: any) {
    return this.createWithFormData(API_ENDPOINT.REPORT_UPLOAD.WMS, params).pipe(
      map((body: any) => {
        return body;
      })
    );
  }
  uploadTargetRevenue(params: any) {
    return this.createWithFormData(
      API_ENDPOINT.REPORT_UPLOAD.TARGET_REVENUE,
      params
    ).pipe(
      map((body: any) => {
        return body;
      })
    );
  }
  uploadTargetQTY(params: any) {
    return this.createWithFormData(
      API_ENDPOINT.REPORT_UPLOAD.TARGET_QTY,
      params
    ).pipe(
      map((body: any) => {
        return body;
      })
    );
  }
  uploadForcastQTY(params: any) {
    return this.createWithFormData(
      API_ENDPOINT.REPORT_UPLOAD.FORCAST_QTY,
      params
    ).pipe(
      map((body: any) => {
        return body;
      })
    );
  }
  uploadActualRevenue(params: any) {
    return this.createWithFormData(
      API_ENDPOINT.REPORT_UPLOAD.ACTUAL_REVENUE,
      params
    ).pipe(
      map((body: any) => {
        return body;
      })
    );
  }
  uploadItem(params: any) {
    return this.createWithFormData(
      API_ENDPOINT.REPORT_UPLOAD.UPLOAD_ITEM,
      params
    ).pipe(
      map((body: any) => {
        return body;
      })
    );
  }
  importSalePrice(id: any, params: any) {
    return this.createWithFormData(
      `${API_ENDPOINT.MASTER_DATA.SALES_PRICE}/${id}/import`,
      params
    ).pipe(
      map((body: any) => {
        return body;
      })
    );
  }
}
