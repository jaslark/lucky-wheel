import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';
import { ConfigClassStatus } from './style-status.constant';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {
  // tslint:disable-next-line: no-input-rename
  @Input('statusCd') statusCd: any;
  // tslint:disable-next-line: no-input-rename
  @Input('statusName') statusName: any;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title
  ) {}
  ngOnInit() {}
  setClassName(statusCd: any) {
    const styleObj = ConfigClassStatus.find(
      (item: any) => item.status === statusCd
    );
    return styleObj ? `status ${styleObj.className}` : 'status status-default';
  }
}
