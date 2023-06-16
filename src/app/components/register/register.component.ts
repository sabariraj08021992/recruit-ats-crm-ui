import { Component ,OnInit} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router} from '@angular/router';
import { AppService } from 'src/app/services/app.service';
import { AuthService } from 'src/app/services/auth.service';
import { BannerComponent } from '../banner/banner.component';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
  registerAccountForm: any;
  showPassword:boolean = false
  constructor(
    private fb: FormBuilder,
    private router:Router,
    private appService:AppService,
    private authService:AuthService
  ){
    
  } 

  ngOnInit() {
    this.appService.hideGlobalNavigation();

    this.registerAccountForm = this.fb.group({
      account_name: [null, [Validators.required]],
      account_currency_type: [null],
      user_name: [null, [Validators.required]],
      user_email: [null, [Validators.required,Validators.email]],
      user_password: [null, Validators.required],
      user_role: ['account_owner']
    });
  }
  
  get f() {
    return this.registerAccountForm.controls;
  }

  togglePassword(){
    if(this.showPassword == true){
      this.showPassword = false
    }else{
      this.showPassword = true
    }
  }

  CheckForAuthentication() {
    let data = Object.assign({}, this.registerAccountForm.value);
    if(this.registerAccountForm.valid){
      this.authService.registerAccount(data).subscribe((res:any)=>{
        if(res?.status == "200"){
          this.router.navigate(["/home"]);
        }
        
      })
    }
  }

  ngOnDestroy() {
    
  }
}
