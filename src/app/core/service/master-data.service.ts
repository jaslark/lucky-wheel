import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseAPIClass } from '@app/core/class/baseAPI.class';
import { API_ENDPOINT } from '@app/core/constants';
import { map } from 'rxjs/operators';
import { LocalStorageService } from '../local-storage.service';

@Injectable()
export class MasterDataService extends BaseAPIClass {
  constructor(
    protected httpClient: HttpClient,
    protected localStorageService: LocalStorageService
  ) {
    super(httpClient, localStorageService);
  }
  // UOM
  getListUOM(params: any) {
    return this.getAll(API_ENDPOINT.MASTER_DATA.UOM, params).pipe(
      map((body: any) => {
        return body;
      })
    );
  }
  getUOMOptions(params?: any) {
    return this.getAll(API_ENDPOINT.MASTER_DATA.UOM + '/option', params).pipe(
      map((body: any) => {
        return body;
      })
    );
  }
  getUOMById(id: string) {
    return this.getById(API_ENDPOINT.MASTER_DATA.UOM, id).pipe(
      map((body: any) => {
        return body;
      })
    );
  }

  createUOM(params: any) {
    return this.create(API_ENDPOINT.MASTER_DATA.UOM, params).pipe(
      map((body: any) => {
        return body;
      })
    );
  }

  updateUOM(id: string, params: any) {
    return this.update(API_ENDPOINT.MASTER_DATA.UOM, id, params).pipe(
      map((body: any) => {
        return body;
      })
    );
  }
  deleteUOM(id: string) {
    return this.delete(API_ENDPOINT.MASTER_DATA.UOM, id).pipe(
      map((body: any) => {
        return body;
      })
    );
  }
  getListUOMCategory() {
    return this.getAll(`${API_ENDPOINT.MASTER_DATA.UOM}/category/option`).pipe(
      map((body: any) => {
        return body;
      })
    );
  }

  // COMPANY INFO
  getInfoGroupCompany() {
    return this.getAll(
      `${API_ENDPOINT.MASTER_DATA.SETUP_COMPANY}/getByGroupName/company`
    ).pipe(
      map((body: any) => {
        return body;
      })
    );
  }

  getInfoCompany() {
    return this.getAll(`${API_ENDPOINT.MASTER_DATA.SETUP_COMPANY}`).pipe(
      map((body: any) => {
        return body;
      })
    );
  }
  updateInfoCompany(params: any) {
    return this.createWithFormData(
      API_ENDPOINT.MASTER_DATA.SETUP_COMPANY,
      params
    ).pipe(
      map((body: any) => {
        return body;
      })
    );
  }

  // ATTRIBUTE
  getListAttributes(params: any) {
    return this.getAll(`${API_ENDPOINT.MASTER_DATA.ATTRIBUTES}`, params).pipe(
      map((body: any) => {
        return body;
      })
    );
  }
  getAttribute(id: string) {
    return this.getAll(`${API_ENDPOINT.MASTER_DATA.ATTRIBUTES}/${id}`).pipe(
      map((body: any) => {
        return body;
      })
    );
  }
  createAttributes(params: any) {
    return this.create(API_ENDPOINT.MASTER_DATA.ATTRIBUTES, params).pipe(
      map((body: any) => {
        return body;
      })
    );
  }

  updateAttribute(id: string, params: any) {
    return this.update(API_ENDPOINT.MASTER_DATA.ATTRIBUTES, id, params).pipe(
      map((body: any) => {
        return body;
      })
    );
  }
  updateStatusAttribute(id: string, params: any) {
    return this.update(
      API_ENDPOINT.MASTER_DATA.ATTRIBUTES + '/active',
      id,
      params
    ).pipe(
      map((body: any) => {
        return body;
      })
    );
  }
  deleteAttribute(id: string) {
    return this.delete(API_ENDPOINT.MASTER_DATA.ATTRIBUTES, id).pipe(
      map((body: any) => {
        return body;
      })
    );
  }
  // SITES
  getListSites(params: any) {
    return this.getAll(API_ENDPOINT.MASTER_DATA.WAREHOUSE_STORE, params).pipe(
      map((body: any) => {
        return body;
      })
    );
  }
  getListSitesOption(params: any) {
    return this.getAll(
      `${API_ENDPOINT.MASTER_DATA.WAREHOUSE_STORE}/reference`,
      params
    ).pipe(
      map((body: any) => {
        return body;
      })
    );
  }

  getSitesById(id: string) {
    return this.getById(API_ENDPOINT.MASTER_DATA.WAREHOUSE_STORE, id).pipe(
      map((body: any) => {
        return body;
      })
    );
  }

  createSites(params: any) {
    return this.create(API_ENDPOINT.MASTER_DATA.WAREHOUSE_STORE, params).pipe(
      map((body: any) => {
        return body;
      })
    );
  }

  updateSites(id: string, params: any) {
    return this.update(
      API_ENDPOINT.MASTER_DATA.WAREHOUSE_STORE,
      id,
      params
    ).pipe(
      map((body: any) => {
        return body;
      })
    );
  }

  deleteSites(id: string) {
    return this.delete(API_ENDPOINT.MASTER_DATA.WAREHOUSE_STORE, id).pipe(
      map((body: any) => {
        return body;
      })
    );
  }
  getSiteReference(params?: any) {
    return this.getAll(
      `${API_ENDPOINT.MASTER_DATA.WAREHOUSE_STORE}/reference`,
      params
    ).pipe(
      map((body: any) => {
        return body;
      })
    );
  }
  // PAYMENT TERM
  getListPaymentTerm(params: any) {
    return this.getAll(API_ENDPOINT.MASTER_DATA.PAYMENT_TERM, params).pipe(
      map((body: any) => {
        return body;
      })
    );
  }

  getPaymentTermById(id: string) {
    return this.getById(API_ENDPOINT.MASTER_DATA.PAYMENT_TERM, id).pipe(
      map((body: any) => {
        return body;
      })
    );
  }

  createPaymentTerm(params: any) {
    return this.create(API_ENDPOINT.MASTER_DATA.PAYMENT_TERM, params).pipe(
      map((body: any) => {
        return body;
      })
    );
  }

  updatePaymentTerm(id: string, params: any) {
    return this.update(API_ENDPOINT.MASTER_DATA.PAYMENT_TERM, id, params).pipe(
      map((body: any) => {
        return body;
      })
    );
  }

  deletePaymentTerm(id: string) {
    return this.delete(API_ENDPOINT.MASTER_DATA.PAYMENT_TERM, id).pipe(
      map((body: any) => {
        return body;
      })
    );
  }
  generateCodePaymentTerm() {
    return this.getAll(
      `${API_ENDPOINT.MASTER_DATA.PAYMENT_TERM}/generate-code`
    ).pipe(
      map((body: any) => {
        return body;
      })
    );
  }
  getPaymentTermOption() {
    return this.getAll(`${API_ENDPOINT.MASTER_DATA.PAYMENT_TERM}/option`).pipe(
      map((body: any) => {
        return body;
      })
    );
  }

  // TAXTYPE
  getListTaxType(params: any) {
    return this.getAll(API_ENDPOINT.MASTER_DATA.TAX_TYPE, params).pipe(
      map((body: any) => {
        return body;
      })
    );
  }

  getTaxTypeById(id: string) {
    return this.getById(API_ENDPOINT.MASTER_DATA.TAX_TYPE, id).pipe(
      map((body: any) => {
        return body;
      })
    );
  }

  createTaxType(params: any) {
    return this.create(API_ENDPOINT.MASTER_DATA.TAX_TYPE, params).pipe(
      map((body: any) => {
        return body;
      })
    );
  }

  updateTaxType(id: string, params: any) {
    return this.update(API_ENDPOINT.MASTER_DATA.TAX_TYPE, id, params).pipe(
      map((body: any) => {
        return body;
      })
    );
  }

  deleteTaxType(id: string) {
    return this.delete(API_ENDPOINT.MASTER_DATA.TAX_TYPE, id).pipe(
      map((body: any) => {
        return body;
      })
    );
  }
  generateCodeTaxType() {
    return this.getAll(
      `${API_ENDPOINT.MASTER_DATA.TAX_TYPE}/code/reference`
    ).pipe(
      map((body: any) => {
        return body;
      })
    );
  }
  getReferenceTax(params: any) {
    return this.getAll(
      `${API_ENDPOINT.MASTER_DATA.TAX_TYPE}/reference`,
      params
    ).pipe(
      map((body: any) => {
        return body;
      })
    );
  }
  // CARRIER
  getListCarrier(params: any) {
    return this.getAll(API_ENDPOINT.MASTER_DATA.CARRIER, params).pipe(
      map((body: any) => {
        return body;
      })
    );
  }

  getCarrierById(id: string) {
    return this.getById(API_ENDPOINT.MASTER_DATA.CARRIER, id).pipe(
      map((body: any) => {
        return body;
      })
    );
  }

  createCarrier(params: any) {
    return this.create(API_ENDPOINT.MASTER_DATA.CARRIER, params).pipe(
      map((body: any) => {
        return body;
      })
    );
  }

  updateCarrier(id: string, params: any) {
    return this.update(API_ENDPOINT.MASTER_DATA.CARRIER, id, params).pipe(
      map((body: any) => {
        return body;
      })
    );
  }

  deleteCarrier(id: string) {
    return this.delete(API_ENDPOINT.MASTER_DATA.CARRIER, id).pipe(
      map((body: any) => {
        return body;
      })
    );
  }
  generateCodeCarrier() {
    return this.getAll(
      `${API_ENDPOINT.MASTER_DATA.CARRIER}/generate-code`
    ).pipe(
      map((body: any) => {
        return body;
      })
    );
  }
  getListCarrierOption() {
    return this.getAll(`${API_ENDPOINT.MASTER_DATA.CARRIER}/option`).pipe(
      map((body: any) => {
        return body;
      })
    );
  }

  // PAYMENT METHOD
  getListPaymentMethod(params: any) {
    return this.getAll(API_ENDPOINT.MASTER_DATA.PAYMENT_METHOD, params).pipe(
      map((body: any) => {
        return body;
      })
    );
  }

  getPaymentMethodById(id: string) {
    return this.getById(API_ENDPOINT.MASTER_DATA.PAYMENT_METHOD, id).pipe(
      map((body: any) => {
        return body;
      })
    );
  }

  createPaymentMethod(params: any) {
    return this.create(API_ENDPOINT.MASTER_DATA.PAYMENT_METHOD, params).pipe(
      map((body: any) => {
        return body;
      })
    );
  }

  updatePaymentMethod(id: string, params: any) {
    return this.update(
      API_ENDPOINT.MASTER_DATA.PAYMENT_METHOD,
      id,
      params
    ).pipe(
      map((body: any) => {
        return body;
      })
    );
  }

  deletePaymentMethod(id: string) {
    return this.delete(API_ENDPOINT.MASTER_DATA.PAYMENT_METHOD, id).pipe(
      map((body: any) => {
        return body;
      })
    );
  }
  generateCodePaymentMethod() {
    return this.getAll(
      `${API_ENDPOINT.MASTER_DATA.PAYMENT_METHOD}/generate-code`
    ).pipe(
      map((body: any) => {
        return body;
      })
    );
  }

  getOptionPaymentMethod(params: any) {
    return this.getAll(
      `${API_ENDPOINT.MASTER_DATA.PAYMENT_METHOD}/option`,
      params
    ).pipe(
      map((body: any) => {
        return body;
      })
    );
  }

  getPaymentType() {
    return this.getAll(`/master/payment-type`).pipe(
      map((body: any) => {
        return body;
      })
    );
  }
  getPaymentProcessorType() {
    return this.getAll(`/master/payment-processor-type`).pipe(
      map((body: any) => {
        return body;
      })
    );
  }
  getPaymentTransactionType() {
    return this.getAll(`/master/payment-transaction-type`).pipe(
      map((body: any) => {
        return body;
      })
    );
  }

  // Conditions
  getListConditions(params: any) {
    return this.getAll(`${API_ENDPOINT.MASTER_DATA.CONDITIONS}`, params).pipe(
      map((body: any) => {
        return body;
      })
    );
  }
  getCondition(id: string) {
    return this.getAll(`${API_ENDPOINT.MASTER_DATA.CONDITIONS}/${id}`).pipe(
      map((body: any) => {
        return body;
      })
    );
  }
  createCondition(params: any) {
    return this.create(API_ENDPOINT.MASTER_DATA.CONDITIONS, params).pipe(
      map((body: any) => {
        return body;
      })
    );
  }

  updateCondition(id: string, params: any) {
    return this.update(API_ENDPOINT.MASTER_DATA.CONDITIONS, id, params).pipe(
      map((body: any) => {
        return body;
      })
    );
  }

  deleteCondition(id: string) {
    return this.delete(API_ENDPOINT.MASTER_DATA.CONDITIONS, id).pipe(
      map((body: any) => {
        return body;
      })
    );
  }

  // Non-stock items
  getMiscs(params: any) {
    return this.getAll(`${API_ENDPOINT.MASTER_DATA.MISC}`, params).pipe(
      map((body: any) => {
        return body;
      })
    );
  }

  // Product Categoryy
  getListProductCategory(params: any) {
    return this.getAll(
      `${API_ENDPOINT.MASTER_DATA.PRODUCT_CATEGORY}`,
      params
    ).pipe(
      map((body: any) => {
        return body;
      })
    );
  }
  getAllProductCategory(params: any) {
    return this.getAll(
      `${API_ENDPOINT.MASTER_DATA.PRODUCT_CATEGORY}/getAll`,
      params
    ).pipe(
      map((body: any) => {
        return body;
      })
    );
  }
  getProductCategoryParent(params: any) {
    return this.getAll(
      `${API_ENDPOINT.MASTER_DATA.PRODUCT_CATEGORY}/parents`,
      params
    ).pipe(
      map((body: any) => {
        return body;
      })
    );
  }
  getProductCategoryChild(idCateParent: any, params: any) {
    return this.getAll(
      `${API_ENDPOINT.MASTER_DATA.PRODUCT_CATEGORY}/all-children/${idCateParent}`,
      params
    ).pipe(
      map((body: any) => {
        return body;
      })
    );
  }
  getListBrandOption() {
    return this.getAll(`${API_ENDPOINT.MASTER_DATA.BRAND}/reference`).pipe(
      map((body: any) => {
        return body;
      })
    );
  }
  getMisc(id: string) {
    return this.getAll(`${API_ENDPOINT.MASTER_DATA.MISC}/${id}`).pipe(
      map((body: any) => {
        return body;
      })
    );
  }
  getMiscTypes() {
    return this.getAll(`${API_ENDPOINT.MASTER_DATA.MISC}/type`).pipe(
      map((body: any) => {
        return body;
      })
    );
  }

  getProductCategory(id: string) {
    return this.getAll(
      `${API_ENDPOINT.MASTER_DATA.PRODUCT_CATEGORY}/${id}`
    ).pipe(
      map((body: any) => {
        return body;
      })
    );
  }

  createMisc(params: any) {
    return this.create(API_ENDPOINT.MASTER_DATA.MISC, params).pipe(
      map((body: any) => {
        return body;
      })
    );
  }
  createProductCategory(params: any) {
    return this.createWithFormData(
      API_ENDPOINT.MASTER_DATA.PRODUCT_CATEGORY,
      params
    ).pipe(
      map((body: any) => {
        return body;
      })
    );
  }

  updateMisc(id: string, params: any) {
    return this.update(API_ENDPOINT.MASTER_DATA.MISC, id, params).pipe(
      map((body: any) => {
        return body;
      })
    );
  }

  updateProductCategory(id: any, params: any) {
    return this.createWithFormData(
      `${API_ENDPOINT.MASTER_DATA.PRODUCT_CATEGORY}/${id}`,
      params
    ).pipe(
      map((body: any) => {
        return body;
      })
    );
  }

  deleteMisc(id: string) {
    return this.delete(API_ENDPOINT.MASTER_DATA.MISC, id).pipe(
      map((body: any) => {
        return body;
      })
    );
  }
  deleteProductCategory(id: any) {
    return this.delete(API_ENDPOINT.MASTER_DATA.PRODUCT_CATEGORY, id).pipe(
      map((body: any) => {
        return body;
      })
    );
  }

  getOptionProductGroup(params: any) {
    return this.getAll(
      `${API_ENDPOINT.MASTER_DATA.PRODUCT_CATEGORY}/get-product-group-category-dropdown`,
      params
    ).pipe(
      map((body: any) => {
        return body;
      })
    );
  }

  // Currency
  getCurrencies(params: any) {
    return this.getAll(`${API_ENDPOINT.MASTER_DATA.CURRENCY}`, params).pipe(
      map((body: any) => {
        return body;
      })
    );
  }
  getCurrencyRef() {
    return this.getAll(`${API_ENDPOINT.MASTER_DATA.CURRENCY}/reference`).pipe(
      map((body: any) => {
        return body;
      })
    );
  }
  activeCurrencyRef() {
    return this.getAll(
      `${API_ENDPOINT.MASTER_DATA.CURRENCY}/reference/activate`
    ).pipe(
      map((body: any) => {
        return body;
      })
    );
  }
  deactiveCurrencyRef() {
    return this.getAll(
      `${API_ENDPOINT.MASTER_DATA.CURRENCY}/reference/inactivate`
    ).pipe(
      map((body: any) => {
        return body;
      })
    );
  }
  getCurrency(id: string) {
    return this.getAll(`${API_ENDPOINT.MASTER_DATA.CURRENCY}/${id}`).pipe(
      map((body: any) => {
        return body;
      })
    );
  }
  getExchangeRates(id: string, params: any = {}) {
    return this.getAll(
      `${API_ENDPOINT.MASTER_DATA.CURRENCY}/${id}/exchange-rate`,
      params
    ).pipe(
      map((body: any) => {
        return body;
      })
    );
  }
  updateExchangeRate(id: string, params: any) {
    return this.update(
      `${API_ENDPOINT.MASTER_DATA.CURRENCY}/update-exchange-rate`,
      id,
      params
    ).pipe(
      map((body: any) => {
        return body;
      })
    );
  }
  insertExchangeRate(params: any) {
    return this.create(
      `${API_ENDPOINT.MASTER_DATA.CURRENCY}/add-exchange-rate`,
      params
    ).pipe(
      map((body: any) => {
        return body;
      })
    );
  }
  createCurrency(params: any) {
    return this.create(API_ENDPOINT.MASTER_DATA.CURRENCY, params).pipe(
      map((body: any) => {
        return body;
      })
    );
  }

  updateCurrency(id: string, params: any) {
    return this.update(API_ENDPOINT.MASTER_DATA.CURRENCY, id, params).pipe(
      map((body: any) => {
        return body;
      })
    );
  }

  deleteCurrency(id: string) {
    return this.delete(API_ENDPOINT.MASTER_DATA.CURRENCY, id).pipe(
      map((body: any) => {
        return body;
      })
    );
  }
  getDefaultCurrency() {
    return this.getAll(
      `${API_ENDPOINT.MASTER_DATA.CURRENCY}/reference/default`
    ).pipe(
      map((body: any) => {
        return body;
      })
    );
  }
  // UOM CONVERSION
  getListUOMConversion(params: any) {
    return this.getAll(
      `${API_ENDPOINT.MASTER_DATA.UOM}/conversion`,
      params
    ).pipe(
      map((body: any) => {
        return body;
      })
    );
  }
  getUOMConversionOptions(params?: any) {
    return this.getAll(API_ENDPOINT.MASTER_DATA.UOM + '/option', params).pipe(
      map((body: any) => {
        return body;
      })
    );
  }
  getUOMConversionById(id: string) {
    return this.getById(`${API_ENDPOINT.MASTER_DATA.UOM}/conversion`, id).pipe(
      map((body: any) => {
        return body;
      })
    );
  }
  createUOMConversion(params: any) {
    return this.create(API_ENDPOINT.MASTER_DATA.UOM, params).pipe(
      map((body: any) => {
        return body;
      })
    );
  }
  updateUOMConversion(id: string, params: any) {
    return this.update(
      `${API_ENDPOINT.MASTER_DATA.UOM}/conversion`,
      id,
      params
    ).pipe(
      map((body: any) => {
        return body;
      })
    );
  }
  deleteUOMConversion(id: string) {
    return this.delete(API_ENDPOINT.MASTER_DATA.UOM, id).pipe(
      map((body: any) => {
        return body;
      })
    );
  }

  // REJECTION/RETURN REASON
  getListReason(params: any) {
    return this.getAll(API_ENDPOINT.MASTER_DATA.REASON, params).pipe(
      map((body: any) => {
        return body;
      })
    );
  }

  getReasonById(id: string) {
    return this.getById(API_ENDPOINT.MASTER_DATA.REASON, id).pipe(
      map((body: any) => {
        return body;
      })
    );
  }

  createReason(params: any) {
    return this.create(API_ENDPOINT.MASTER_DATA.REASON, params).pipe(
      map((body: any) => {
        return body;
      })
    );
  }

  updateReason(id: string, params: any) {
    return this.update(API_ENDPOINT.MASTER_DATA.REASON, id, params).pipe(
      map((body: any) => {
        return body;
      })
    );
  }

  deleteReason(id: string) {
    return this.delete(API_ENDPOINT.MASTER_DATA.REASON, id).pipe(
      map((body: any) => {
        return body;
      })
    );
  }

  changeReasonStatus(id: string, params: any) {
    return this.update(
      `${API_ENDPOINT.MASTER_DATA.REASON}/change-status`,
      id,
      params
    ).pipe(
      map((body: any) => {
        return body;
      })
    );
  }

  generateCodeReason() {
    return this.getAll(`${API_ENDPOINT.MASTER_DATA.REASON}/generate-code`).pipe(
      map((body: any) => {
        return body;
      })
    );
  }
  getReasonOption() {
    return this.getAll(`${API_ENDPOINT.MASTER_DATA.REASON}/reference`).pipe(
      map((body: any) => {
        return body;
      })
    );
  }

  // SALES TERRITORY
  getListSalesTerritory(params: any) {
    return this.getAll(API_ENDPOINT.MASTER_DATA.SALES_TERRITORY, params).pipe(
      map((body: any) => {
        return body;
      })
    );
  }

  getSalesTerritoryById(id: string) {
    return this.getById(API_ENDPOINT.MASTER_DATA.SALES_TERRITORY, id).pipe(
      map((body: any) => {
        return body;
      })
    );
  }

  createSalesTerritory(params: any) {
    return this.create(API_ENDPOINT.MASTER_DATA.SALES_TERRITORY, params).pipe(
      map((body: any) => {
        return body;
      })
    );
  }

  updateSalesTerritory(id: string, params: any) {
    return this.update(
      API_ENDPOINT.MASTER_DATA.SALES_TERRITORY,
      id,
      params
    ).pipe(
      map((body: any) => {
        return body;
      })
    );
  }

  deleteSalesTerritory(id: string) {
    return this.delete(API_ENDPOINT.MASTER_DATA.SALES_TERRITORY, id).pipe(
      map((body: any) => {
        return body;
      })
    );
  }

  changeSalesTerritoryStatus(id: string, params: any) {
    return this.update(
      `${API_ENDPOINT.MASTER_DATA.SALES_TERRITORY}/change-status`,
      id,
      params
    ).pipe(
      map((body: any) => {
        return body;
      })
    );
  }

  generateCodeSalesTerritory() {
    return this.getAll(
      `${API_ENDPOINT.MASTER_DATA.SALES_TERRITORY}/generate-code`
    ).pipe(
      map((body: any) => {
        return body;
      })
    );
  }
  getSalesTerritoryOption() {
    return this.getAll(
      `${API_ENDPOINT.MASTER_DATA.SALES_TERRITORY}/reference`
    ).pipe(
      map((body: any) => {
        return body;
      })
    );
  }

  // Actual Production Loss
  getListAPL(params: any) {
    return this.getAll(
      API_ENDPOINT.MASTER_DATA.ACTUAL_PRODUCTION_LOSS,
      params
    ).pipe(
      map((body: any) => {
        return body;
      })
    );
  }
  getAPLOptions(params?: any) {
    return this.getAll(
      API_ENDPOINT.MASTER_DATA.ACTUAL_PRODUCTION_LOSS +
        '/get-list-existed-time',
      params
    ).pipe(
      map((body: any) => {
        return body;
      })
    );
  }
  getFactoriesOptions(params?: any) {
    return this.getAll(
      API_ENDPOINT.MASTER_DATA.WAREHOUSE_STORE + '/option',
      params
    ).pipe(
      map((body: any) => {
        return body;
      })
    );
  }
  getAPLById(id: string) {
    return this.getById(
      API_ENDPOINT.MASTER_DATA.ACTUAL_PRODUCTION_LOSS,
      id
    ).pipe(
      map((body: any) => {
        return body;
      })
    );
  }

  createAPL(params: any) {
    return this.create(
      API_ENDPOINT.MASTER_DATA.ACTUAL_PRODUCTION_LOSS,
      params
    ).pipe(
      map((body: any) => {
        return body;
      })
    );
  }

  updateAPL(id: string, params: any) {
    return this.update(
      API_ENDPOINT.MASTER_DATA.ACTUAL_PRODUCTION_LOSS,
      id,
      params
    ).pipe(
      map((body: any) => {
        return body;
      })
    );
  }
}
