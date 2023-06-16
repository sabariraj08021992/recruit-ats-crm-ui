import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router , NavigationEnd} from '@angular/router';
import { Observable } from 'rxjs';
import { AppService } from 'src/app/services/app.service';
import {filter} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router:Router,
    private appService:AppService
  ){
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    )
    .subscribe((event:any) => {
        if(event?.url.indexOf("login") != -1 || event?.url.indexOf("signup") != -1){
            this.appService.globalNavigation = false;
        }else{
            this.appService.globalNavigation = true;
        }
    });
    return true;
  }
}
