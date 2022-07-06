import { Injectable } from '@angular/core';
import { saveAs } from 'file-saver';
import { environment } from '@env/environment';
@Injectable()
export class UtilService {
  constructor() {}

  removeEmpty(obj: any): any {
    for (const propName in obj) {
      if (
        obj[propName] === null ||
        obj[propName] === undefined ||
        obj[propName] === '' ||
        (Array.isArray(obj[propName]) && !obj[propName].length)
      ) {
        delete obj[propName];
      }
    }
    return obj;
  }

  copyToClipboard(value: string) {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = value;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

  pluck(array: any, key: string) {
    return array.map((item: any) => item[key]);
  }

  download(url: string, name?: string) {
    saveAs(url, name);
  }

  returnPathFile(file: any) {
    return `${environment.serverUrl}/file?path=${file.path}`;
  }

  deleteKeysObj(item: any, keys: any[]) {
    if (keys.length > 0) {
      keys.forEach((key: string) => {
        delete item[key];
      });
      return item;
    }
  }

  findDataById(id: any, arr: any, key: string) {
    const item = arr.filter((x: any) => x[key] === id);
    return item[0];
  }

  findCurrencyCode(
    arr_currency: any[],
    currency_id: any,
    default_currency_code?: any
  ) {
    if (arr_currency.length > 0) {
      const currency = arr_currency.find(
        (item: any) => item.id === currency_id
      );
      return currency ? currency.symbol : default_currency_code;
    }
    return default_currency_code;
  }

  makeNameCustomer(customers: any) {
    customers.map((item: any) => {
      item['full_name'] = item.first_name;
      return item;
    });
    return customers;
  }
  makeNameUser(user: any) {
    return `${user.first_name} ${user.last_name}`;
  }
}
