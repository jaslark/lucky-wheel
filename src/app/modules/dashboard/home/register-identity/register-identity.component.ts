import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnInit,
  Output
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {
  DashboardService,
  LocalStorageService,
  MasterDataService
} from '@app/core';
import * as Icon from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { WHEEL } from '../enum/step.enum';

@Component({
  selector: 'app-register-identity',
  templateUrl: './register-identity.component.html',
  styleUrls: ['./register-identity.component.scss'],
  providers: [MasterDataService]
})
export class RegisterIdentiyComponent implements OnInit {
  public listMaster: any = {};
  generalForm: FormGroup;
  faIcon = Icon;

  constructor(
    private dashboardService: DashboardService,
    public fb: FormBuilder,
    private cd: ChangeDetectorRef,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    public localStorageService: LocalStorageService
  ) {
    this.generalForm = fb.group({
      code: [null, Validators.required],
      full_name: [null, Validators.required],
      identity: [null, Validators.required]
    });
  }

  @Output() currentStep = new EventEmitter<Number>();

  ngOnInit(): void {
    const codeNumber = this.route.snapshot.params.id;
    this.generalForm.patchValue({ code: codeNumber });
  }

  submitForm() {
    if (this.generalForm.invalid) {
      return;
    }
    const params = { ...this.generalForm.value };
    console.log(params);
    this.dashboardService.authenticationAccount(params).subscribe(
      res => {
        console.log(res, 'authenticationAccount');
        this.localStorageService.setItem(
          'wheelTokenAqua',
          JSON.stringify(res.data.token)
        );
        this.currentStep.emit(WHEEL.STEP_2);
      },
      err => {
        console.log(err);
        // this.router.navigate(["/404"], {
        //   replaceUrl: true,
        // });
      }
    );
  }
}
