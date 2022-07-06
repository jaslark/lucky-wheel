import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConfigHeaderStatus } from './header-status.constant';

@Component({
  selector: 'app-header-status',
  templateUrl: './header-status.component.html',
  styleUrls: ['./header-status.component.scss']
})
export class HeaderStatusComponent implements OnInit {
  public status: any = '';
  // tslint:disable-next-line:no-input-rename
  @Input('listMasterCountStatus') listMasterCountStatus: any;
  @Input('status') set defaultStatus(status: string) {
    this.status = status;
  }
  @Output() clickIntoStatus = new EventEmitter<number>();
  public configHeaderStatus = ConfigHeaderStatus;
  constructor() {}

  ngOnInit() {}

  eventClickIntoStatus(status: number) {
    this.status = status;
    this.clickIntoStatus.emit(status);
  }
}
