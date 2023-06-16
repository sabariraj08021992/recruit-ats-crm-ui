import { Component ,OnInit} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router} from '@angular/router';
import { AppService } from 'src/app/services/app.service';
import { AuthService } from 'src/app/services/auth.service';
import { BannerComponent } from '../banner/banner.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit  {
  loginForm: any;
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

    this.loginForm = this.fb.group({
      user_email: [null, [Validators.required,Validators.email]],
      user_password: [null, Validators.required]
    });
   
  }
  
  get f() {
    return this.loginForm.controls;
  }

  togglePassword(){
    if(this.showPassword == true){
      this.showPassword = false
    }else{
      this.showPassword = true
    }
  }

  CheckForAuthentication() {
    let data = Object.assign({}, this.loginForm.value);
    // this.router.navigate(["/home"]);
    if(this.loginForm.valid){
      this.authService.validateLogin(data).subscribe((res:any)=>{
        if(res?.status == "200"){
          const tokens = res.body.tokens;
          localStorage.setItem("recruitment-ats-access_token",tokens["access"]["token"])
          localStorage.setItem("recruitment-ats-refresh_token",tokens["refresh"]["token"])
          localStorage.setItem("recruitment-ats-refresh_token",tokens["refresh"]["token"])
          this.router.navigate(["/home"]);
        }
      })
    }
  }

  ngOnDestroy() {
    
  }

}
