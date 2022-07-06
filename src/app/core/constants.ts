// export const API_ENDPOINT: any = [];

export const ERROR_OBJECTS: Object = {
  required: '{{field}} is required',
  email: 'Please enter valid email',
  max: '{{field}} is maxlength',
  min: '{{field}} is minlength',
  minlength: '{{field}} is minlength'
};
export const PROFILE_TYPE: any = [
  { id: 1, name: 'Admin' },
  { id: 2, name: 'Normal User' }
];
export const STATUS: any = [
  { id: 0, name: 'Inactive' },
  { id: 1, name: 'Active' }
];
export const CHOICE: any = [
  { id: 0, name: 'No' },
  { id: 1, name: 'Yes' }
];
export const SITES_TYPE = [
  { id: 1, name: 'Warehouse' },
  { id: 2, name: 'Store' }
];
export const PAYMENT_MADE_BY = [
  { id: 1, name: 'Itself' },
  { id: 2, name: 'Parent company' }
];
export const PAYMENT_MADE_BY_CUS = [
  { id: 0, name: 'Itself' },
  { id: 1, name: 'Parent company' }
];
export const DISCOUNT_TYPE = [{ id: 1, name: 'Percent' }];
export const SALESORDER_DISCOUNT_TYPE_PERCENTAGE = 'PE';
export const SALESORDER_DISCOUNT_TYPE_PRICE = 'PR';
export const TAX_TYPE_LIST = [
  { id: 1, name: 'Sales' },
  { id: 2, name: 'Purchase' },
  { id: 3, name: 'Sales & Purchase' }
];
export const SALES_PRICE_TYPE = [
  { id: 1, name: 'Permanent' },
  { id: 2, name: 'Temporary' }
];

export const MESSAGES = {
  CREATE: 'Created Successfully',
  UPDATE: 'Updated Successfully'
};
export const FORMAT_DATE = [{ name: 'MM/DD/YYYY' }, { name: 'DD/MM/YYYY' }];
export const DEFAULT_CURRENCY = 'USD';
// ITEMS
export const TYPE_PRODUCTS = [
  { id: 1, name: 'Domestic' },
  { id: 2, name: 'Export' }
];
export const VALUATION_METHOD = [
  { id: 1, name: 'FIFO' },
  { id: 2, name: 'LIFO' },
  { id: 3, name: 'Average Cost' }
];
export const CUSTOMER_PROSPECT_STATUS: any = [
  { id: 1, name: 'No' },
  { id: 2, name: 'Yes' }
];
export const REASON_TYPE: any = [
  { id: 1, name: 'Customer' },
  { id: 2, name: 'Supplier' }
];
export const TYPE_ADDRESS_CUSTOMER: any = [
  { id: 'BILL', name: 'Billing' },
  { id: 'SHIP', name: 'Shipping' }
];
export const TYPE_ADDRESS_CUSTOMER_WALKIN: any = [
  { id: 'BILL', name: 'Billing' },
  { id: 'SHIP', name: 'Shipping' },
  { id: 'PRI', name: 'Primary' }
];
export const TYPE_CURRENCY_TARGET = 1;
export const TYPE_CURRENCY_FORECAST_ACTUAL = 2;

export const API_ENDPOINT: any = {
  AUTH: {
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout',
    SIGNUP: '/signup',
    RESET_PASSWORD: '/reset-password',
    SELF: '/auth',
    CHANGE_PASSWORD: '/auth/change-password',
    CHANGE_LANGUAGE: '/auth/changeLanguage'
  },
  MASTER_DATA: {
    UOM: '/master/uom',
    ATTRIBUTES: '/attribute',
    CONDITIONS: '/condition',
    CARRIER: '/master/carrier',
    CHART_ACCOUNT: '/master/account',
    CHART_ACCOUNT_TYPE: '/master/account/type',
    CHART_ACCOUNT_DETAIL: '/master/account/type/detail',
    COMPANY_INFO: '/company_info',
    PAYMENT_METHOD: '/master/payment-method',
    PAYMENT_TERM: '/master/payment-term',
    PRODUCT_CATEGORY: '/category',
    WAREHOUSE_STORE: '/master/warehouse',
    TAX_TYPE: '/master/tax-type',
    TEMP: '/make/get-list',
    USER: '/user',
    USER_PROFILE: '/profile',
    SETUP_COMPANY: '/config',
    BANK: '/master/bank',
    COUNTRY: '/master/country',
    CURRENCY: '/master/currency',
    MISC: '/master/misc',
    SHIPPING_ZONE: '/master/shipping-zone',
    SALES_PRICE: '/master/sale-price',
    BRAND: '/master/brand',
    REASON: '/master/reason',
    DISCOUNT_TYPE: '/master/discount-type',
    SALES_TERRITORY: '/master/sales-territory',
    ACTUAL_PRODUCTION_LOSS: '/master/actual-production-loss'
  },
  ITEM: {
    BASE_PRODUCT: '/baseProduct',
    INVENTORY: '/report/inventory/variant'
  },
  CUSTOMER: {
    BASE_CUSTOMER: '/customer'
  },
  SUPPLIER: {
    BASE_SUPPLIER: '/supplier',
    SALE_PRICE: '/supplier-sale-price'
  },
  VARIANT: '/variant',
  CODE_TYPE: '/code-type',
  SALE_ORDER: {
    BASE_ORDER: '/order',
    MASTER_ORDER: '/master/order'
  },
  ACTIVITY: '/activity',
  DELIVERY_ORDER: '/delivery-order',
  WARRANTY: '/warranty',
  PURCHASE_ORDER: '/purchase-order',
  SUPPLIER_SHIPMENT: '/supplier-shipment',
  GOOD_RECEIPT: '/good-receipt',
  REPORT: '/report/rpt',
  REPORT_UPLOAD: {
    COST_CONTROL: '/report/import/cost-control',
    WMS: '/report/import/wms',
    TARGET_REVENUE: '/report/import/target-revenue',
    TARGET_QTY: '/report/import/target-qty',
    FORCAST_QTY: '/report/import/forecast-qty',
    ACTUAL_REVENUE: '/report/import/actual-revenue',
    UPLOAD_ITEM: '/report/import/upload-item'
  }
};
export const ACTIVITY_TYPES = [
  {
    id: 1,
    name: 'Call'
  },
  {
    id: 2,
    name: 'Task'
  },
  {
    id: 3,
    name: 'Meeting'
  },
  {
    id: 4,
    name: 'Email'
  }
];

export const ACTIVITY_PRIORITIES = [
  {
    id: 1,
    name: 'High'
  },
  {
    id: 2,
    name: 'Medium'
  },
  {
    id: 3,
    name: 'Low'
  }
];

export const ACTIVITY_STATUSES = [
  {
    id: 1,
    name: 'To Do'
  },
  {
    id: 2,
    name: 'In-Process'
  },
  {
    id: 3,
    name: 'Completed'
  },
  {
    id: 4,
    name: 'Require Action'
  }
];
