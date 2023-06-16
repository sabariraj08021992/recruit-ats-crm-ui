import { Component ,OnInit} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router} from '@angular/router';
import { AppService } from 'src/app/services/app.service';
import { BannerComponent } from '../banner/banner.component';
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent {
  forgotPasswordForm: any;
  showPassword:boolean = false
  constructor(
    private fb: FormBuilder,
    private router:Router,
    private appService:AppService
  ){
    
  } 

  ngOnInit() {
    this.appService.hideGlobalNavigation();
    this.forgotPasswordForm = this.fb.group({
      user_email: [null, [Validators.required,Validators.email]],
    });
  }
  
  get f() {
    return this.forgotPasswordForm.controls;
  }

  CheckForAuthentication() {
    let data = Object.assign({}, this.forgotPasswordForm.value);

  }

  ngOnDestroy() {
    
  }
}
