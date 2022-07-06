import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable()
export class TableService {
  getListFnName: any;
  context: any;
  constructor() {}

  itemPerPageOptions = [15, 30, 50, 100];
  maxSize = 5;
  sortParams: any = {
    order: null,
    sort: null
  };
  pagination: any = {
    page: 1,
    length: this.itemPerPageOptions[0],
    total_record: 0
  };

  temptSearchParams: any = null;
  temptParams: any = null;

  changeLength() {
    this.pagination['page'] = 1;
    if (this.context.selectedIndex) {
      this.context.selectedIndex = 0;
    }
    if (this.context.searchForm) {
      this.temptSearchParams = this.context.searchForm.value;

      this.context.searchForm.reset();
      this.context.searchForm.patchValue(this.temptParams || {});
      this.context[this.getListFnName]();

      this.context.searchForm.reset();
      this.context.searchForm.patchValue(this.temptSearchParams || {});
      return;
    }
    return this.context[this.getListFnName]();
  }

  getParams() {
    const params: any = {};
    params['page'] = this.pagination['page'] || 1;
    params['length'] = this.pagination['length'] || 15;
    params['order'] = 'created_at';
    params['sort'] = 'DESC';

    /* check sort */
    if (this.sortParams['order']) {
      params['order'] = this.sortParams['order'] || 'created_at';
    }

    if (this.sortParams['sort']) {
      params['sort'] = this.sortParams['sort'] === 1 ? 'asc' : 'desc';
    }

    return params;
  }

  sortAction() {
    return this.context[this.getListFnName]();
  }

  matchPagingOption(options: any) {
    try {
      this.pagination['total_page'] = options['total_page'];
      this.pagination['total_record'] = options['total_record'];
      this.pagination['page'] = options['page'];
    } catch (e) {
      console.log('pagination', e);
    }
  }

  searchAction() {
    let fl = false;
    Object.keys(this.context.searchForm.value).forEach(k => {
      if (
        this.context.searchForm.value[k] === 0 ||
        (this.context.searchForm.value[k] &&
          this.context.searchForm.value[k] !== 'null')
      ) {
        fl = true;
      }
    });
    if (!fl) {
      return false;
    }
    if (this.context.searchForm.value.time) {
      const dateFormat = moment(this.context.searchForm.value.time).format(
        'YYYY-MM'
      );
      this.context.searchForm.patchValue({ time: dateFormat });
    }
    // const dateFormat = moment(this.searchForm.value.time).format("YYYY-DD");

    this.temptParams = {
      ...this.getParams(),
      ...this.context.searchForm.value
    };
    this.pagination['page'] = 1;
    return this.context[this.getListFnName]();
  }

  searchActionWithFilter() {
    this.temptParams = {
      ...this.getParams(),
      ...this.context.searchForm.value,
      ...this.context.filterForm.value
    };
    this.pagination['page'] = 1;
    return this.context[this.getListFnName]();
  }

  resetAction(form?: any, flag?: any) {
    // Flag On To Disable To Fetch List Data
    this.temptSearchParams = null;
    this.temptParams = null;
    if (form) {
      form.reset();
    }
    this.pagination['page'] = 1;
    // Quick Filter
    if (this.context.listMaster && this.context.listMaster['filter']) {
      this.context.listMaster['filter'] = {};
    }
    if (!flag) {
      return this.context[this.getListFnName]();
    }
  }

  changePage(index: any) {
    this.pagination['page'] = index;
    // this.context.table.scrollTableToTop();
    if (this.context.selectedIndex) {
      this.context.selectedIndex = 0;
    }
    if (this.context.searchForm) {
      this.temptSearchParams = this.context.searchForm.value;

      this.context.searchForm.reset();
      this.context.searchForm.patchValue(this.temptParams || {});
      this.context[this.getListFnName]();

      this.context.searchForm.reset();
      this.context.searchForm.patchValue(this.temptSearchParams || {});
      return;
    }
    return this.context[this.getListFnName]();
  }

  getTableConfig() {
    return {
      pagination: this.pagination,
      itemPerPageOptions: this.itemPerPageOptions
    };
  }
  customSearchAction() {
    let fl = false;
    let isCheck = false;
    Object.keys(this.context.searchForm.value).forEach(k => {
      if (
        k !== 'email' &&
        this.context.searchForm.value[k] &&
        this.context.searchForm.value[k] !== 'null'
      ) {
        isCheck = true;
        fl = true;
      }
      if (
        this.context.searchForm.value['email'] &&
        this.context.searchForm.value['email'] !== 'null' &&
        String(this.context.searchForm.value['email']).trim() !== ''
      ) {
        fl = true;
      }
      if (
        this.context.searchForm.value['email'] &&
        this.context.searchForm.value['email'] !== 'null' &&
        String(this.context.searchForm.value['email']).trim() !== ''
      ) {
        if (isCheck === true) {
          fl = true;
        }
      }
    });
    if (!fl) {
      return false;
    }
    this.temptParams = {
      ...this.getParams(),
      ...this.context.searchForm.value
    };
    this.pagination['page'] = 1;
    return this.context[this.getListFnName]();
  }
}
