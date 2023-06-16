import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgSelectModule } from '@ng-select/ng-select';
import { DynamicFormModule } from './shared/dynamic-form/dynamic-form.module';
import { BsDatepickerModule, BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { CandidateListsComponent } from './components/candidate-lists/candidate-lists.component';
import { CandidateOverviewComponent } from './components/candidate-overview/candidate-overview.component';
import { CompanyListsComponent } from './components/company-lists/company-lists.component';
import { CompanyOverviewComponent } from './components/company-overview/company-overview.component';
import { JobListsComponent } from './components/job-lists/job-lists.component';
import { JobOverviewComponent } from './components/job-overview/job-overview.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContactListsComponent } from './components/contact-lists/contact-lists.component';
import { ContactOverviewComponent } from './components/contact-overview/contact-overview.component' 

import { CompanyComponent } from './shared/modals/company/company.component';
import { DealListsComponent } from './components/deal-lists/deal-lists.component';
import { DealOverviewComponent } from './components/deal-overview/deal-overview.component';
import { MailboxComponent } from './components/mailbox/mailbox.component';
import { TaskComponent } from './components/task/task.component';
import { ReportComponent } from './components/report/report.component';
import { RevenueComponent } from './components/revenue/revenue.component';
import { SettingsComponent } from './components/settings/settings.component';

import { GlobalService } from './services/global.service';
import { AppService } from "./services/app.service";
import { CandidateService } from './services/candidate.service';
import { ContactService } from './services/contact.service';
import { JobService } from './services/job.service';
import { CompanyService } from './services/company.service';
import { DealService } from './services/deal.service';
import { BannerComponent } from './components/banner/banner.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    CandidateListsComponent,
    CandidateOverviewComponent,
    CompanyListsComponent,
    CompanyOverviewComponent,
    JobListsComponent,
    JobOverviewComponent,
    HeaderComponent,
    SidebarComponent,
    ContactListsComponent,
    ContactOverviewComponent,
    CompanyComponent,
    DealListsComponent,
    DealOverviewComponent,
    MailboxComponent,
    TaskComponent,
    ReportComponent,
    RevenueComponent,
    SettingsComponent,
    BannerComponent,
    ForgetPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
    DynamicFormModule,
    NgSelectModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [BsDatepickerConfig,GlobalService,AppService,CandidateService,ContactService,JobService,CompanyService,DealService],
  bootstrap: [AppComponent]
})
export class AppModule { }
