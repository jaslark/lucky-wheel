import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseAPIClass } from '@app/core/class/baseAPI.class';
import { API_ENDPOINT } from '@app/core/constants';
import { map } from 'rxjs/operators';
import { LocalStorageService } from '../local-storage.service';

@Injectable()
export class ItemService extends BaseAPIClass {
  constructor(
    protected httpClient: HttpClient,
    protected localStorageService: LocalStorageService
  ) {
    super(httpClient, localStorageService);
  }
  getListBaseProduct(params: any) {
    return this.getAll(API_ENDPOINT.ITEM.BASE_PRODUCT, params).pipe(
      map((body: any) => {
        return body;
      })
    );
  }
  createBaseProduct(params: any) {
    return this.createWithFormData(API_ENDPOINT.ITEM.BASE_PRODUCT, params).pipe(
      map((body: any) => {
        return body;
      })
    );
  }
  updateBaseProduct(id: string, params: any) {
    return this.updateWithFormData(
      API_ENDPOINT.ITEM.BASE_PRODUCT,
      id,
      params
    ).pipe(
      map((body: any) => {
        return body;
      })
    );
  }
  getBaseProductById(id: string) {
    return this.getById(API_ENDPOINT.ITEM.BASE_PRODUCT, id).pipe(
      map((body: any) => {
        return body;
      })
    );
  }
  deleteBaseProduct(id: string) {
    return this.delete(API_ENDPOINT.ITEM.BASE_PRODUCT, id).pipe(
      map((body: any) => {
        return body;
      })
    );
  }
  generateCodeBaseProduct() {
    return this.getAll(`${API_ENDPOINT.ITEM.BASE_PRODUCT}/generateSku`).pipe(
      map((body: any) => {
        return body;
      })
    );
  }
  generateVariantSummay(params: any) {
    return this.createWithFormData(
      `${API_ENDPOINT.ITEM.BASE_PRODUCT}/generate`,
      params
    ).pipe(
      map((body: any) => {
        return body;
      })
    );
  }
  checkIsExistSKU(params: any) {
    return this.create(`${API_ENDPOINT.ITEM.BASE_PRODUCT}/sku`, params).pipe(
      map((body: any) => {
        return body;
      })
    );
  }
  updateStatus(id: string, status: string, params: any) {
    return this.update(
      `${API_ENDPOINT.ITEM.BASE_PRODUCT}/setActive/${id}`,
      status,
      params
    ).pipe(
      map((body: any) => {
        return body;
      })
    );
  }
  getListVariant(params: any) {
    return this.getAll(
      `${API_ENDPOINT.ITEM.BASE_PRODUCT}/variants`,
      params
    ).pipe(
      map((body: any) => {
        return body;
      })
    );
  }
  getListInventory(params: any) {
    return this.getAll(`${API_ENDPOINT.ITEM.INVENTORY}`, params).pipe(
      map((body: any) => {
        return body;
      })
    );
  }
  getVariantById(id: string) {
    return this.getById(`${API_ENDPOINT.ITEM.BASE_PRODUCT}/variant`, id).pipe(
      map((body: any) => {
        return body;
      })
    );
  }
  getVariantCodeById(id: string) {
    return this.getAll(`/variant/${id}/code?length=1000`).pipe(
      map((body: any) => {
        return body;
      })
    );
  }

  changeStatusVariant(id: string, params: any) {
    return this.update(
      `${API_ENDPOINT.ITEM.BASE_PRODUCT}/variant`,
      id,
      params
    ).pipe(
      map((body: any) => {
        return body;
      })
    );
  }

  getInventoryViewBaseProduct(id: string) {
    return this.getById(`${API_ENDPOINT.ITEM.BASE_PRODUCT}/inventory`, id).pipe(
      map((body: any) => {
        return body;
      })
    );
  }
  updateVariant(id: string, params: any) {
    return this.createWithFormData(
      `${API_ENDPOINT.VARIANT}/${id}`,
      params
    ).pipe(
      map((body: any) => {
        return body;
      })
    );
  }
  // updateVariantJSON(id: string, params: any) {
  //   return this.update(`${API_ENDPOINT.VARIANT}`, id, params).pipe(
  //     map((body: any) => {
  //       return body;
  //     })
  //   );
  // }
  // Variant Code Type
  fetchProductCodeType(params?: any) {
    return this.getAll(`${API_ENDPOINT.CODE_TYPE}/option`, params).pipe(
      map((body: any) => {
        return body;
      })
    );
  }
  generateProductCode(variant_id: number, type_id: number) {
    return this.getAll(
      `${API_ENDPOINT.VARIANT}/${variant_id}/code/generate-code/${type_id}`
    ).pipe(
      map((body: any) => {
        return body;
      })
    );
  }
  updateProductCode(variant_id: number, code_id: number, params: any) {
    return this.update(
      `${API_ENDPOINT.VARIANT}/${variant_id}/code/generate-code/`,
      String(code_id),
      params
    ).pipe(
      map((body: any) => {
        return body;
      })
    );
  }
  createProductCode(variant_id: number, params: any) {
    return this.create(
      `${API_ENDPOINT.VARIANT}/${variant_id}/code`,
      params
    ).pipe(
      map((body: any) => {
        return body;
      })
    );
  }
  deleteProductCode(variant_id: number, code_id: number) {
    return this.delete(
      `${API_ENDPOINT.VARIANT}/${variant_id}/code`,
      String(code_id)
    ).pipe(
      map((body: any) => {
        return body;
      })
    );
  }
  changeStatusProductCode(
    variant_id: number,
    code_id: number,
    status: number,
    params: {}
  ) {
    return this.update(
      `${API_ENDPOINT.VARIANT}/${variant_id}/code/${code_id}/change-status`,
      String(status),
      params
    ).pipe(
      map((body: any) => {
        return body;
      })
    );
  }
  fetchStockByVariantId(id: number) {
    return this.getAll(`${API_ENDPOINT.VARIANT}/${id}/stock`).pipe(
      map((body: any) => {
        return body;
      })
    );
  }
  fetchSalesPriceByVariantId(id: number) {
    return this.getAll(`${API_ENDPOINT.VARIANT}/${id}/sales_price_list`).pipe(
      map((body: any) => {
        return body;
      })
    );
  }
}
