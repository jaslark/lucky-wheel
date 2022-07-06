import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { LocalStorageService } from '../local-storage.service';
const credentialsKey = 'credentials';
@Injectable()
export class PermissionService {
  public listPermission: any = [];
  _credentials: any;
  constructor(
    protected httpClient: HttpClient,
    protected localStorageService: LocalStorageService
  ) {}
  createPermission() {
    // this.userService.getPermissionReference().subscribe(res => {
    //   this.listPermission = res.data;
    //   const savedCredentials = this.localStorageService.getItem(credentialsKey);
    //   if (savedCredentials) {
    //     this._credentials = JSON.parse(savedCredentials);
    //   }
    //   let selfPermission: any = [];
    //   let selfFeature: any = [];
    //   selfPermission = this._credentials.data.permissions;
    //   selfFeature = this._credentials.data.permission_groups;
    //   this.localStorageService.setItem(
    //     'permission',
    //     JSON.stringify(selfPermission)
    //   );
    //   this.localStorageService.setItem(
    //     'permission_groups',
    //     JSON.stringify(selfFeature)
    //   );
    // });
  }
  checkPermission(key: string) {
    const permission = JSON.parse(
      this.localStorageService.getItem('permission')
    );
    const index = permission.indexOf(key);
    return index >= 0 ? true : false;
  }
  checkFeature(key: string) {
    const permission_groups = JSON.parse(
      this.localStorageService.getItem('permission_groups')
    );
    const index = permission_groups.indexOf(key);
    return index >= 0 ? true : false;
  }
}
