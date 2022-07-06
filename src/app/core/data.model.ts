export const CUSTOMER_MODEL: any = {
  payment_method_id: '',
  payment_term_id: '',
  last_sale_dt: '',
  current_dept: '',
  loyalty_discount: '',
  items_in_quote: '',
  type: '',
  credit_info: '',
  billing: [],
  shipping: [],
  contacts: [],
  overall_transaction: []
};

export const ADDRESS_SELECT_MODEL: any = {
  shipping: {
    address_name: '',
    address_line: '',
    country_name: '',
    city_name: '',
    state_name: '',
    zip_code: '',
    address_id: '',
    type: ''
  },
  billing: {
    address_name: '',
    address_line: '',
    country_name: '',
    city_name: '',
    state_name: '',
    zip_code: '',
    address_id: '',
    type: ''
  },
  contact: {
    full_name: '',
    phone: '',
    email: '',
    id: ''
  }
};
export const ORDER_INFO_MODEL: any = {
  total: 0,
  sub_total: 0,
  total_tax: 0,
  total_discount: 0,
  total_shipping_fee: 0,
  order_summary: {},
  tax: [],
  base_total: 0
};
