import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service'; 
import { faBars} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  faBars = faBars;
  constructor(
    private router:Router,
    public appService:GlobalService
  ){

  }
  toggleSidebar(){
    return this.appService.sidebarFlag = !this.appService.sidebarFlag
  }
}
