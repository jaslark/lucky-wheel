import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService, PermissionService } from '@app/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'top-menu',
  templateUrl: 'top-menu.component.html',
  styleUrls: ['top-menu.component.scss'],
  providers: [PermissionService]
})
export class TopMenuComponent implements OnInit {
  userInfo: any = {};
  openMenu = false;
  constructor(
    private localStorageService: LocalStorageService,
    public router: Router,
    private toastr: ToastrService
  ) {}
  MENU_CONSTANT = [];
  lang: any;

  ngOnInit() {}

  onlogOut() {}

  getFlag() {}

  useLanguage(language: string, flag?: boolean) {}
  toggleMenu() {}
}
