import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/services/app.service'; 
import { faBars,faCircleUser, faBell, faSearch,faSignOut,faCirclePlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  faBars = faBars;
  faCircleUser = faCircleUser;
  faBell = faBell;
  faSearch = faSearch;
  faSignOut = faSignOut;
  faCirclePlus = faCirclePlus;
  isHeaderEnabled = true;
  constructor(
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private appService:AppService
  ){
    
    
  }
  ngOnInit(): void {
    
  }

  logout(){
      this.router.navigate(['/login'])
  }
}
