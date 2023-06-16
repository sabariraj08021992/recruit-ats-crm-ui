import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { CandidateListsComponent } from './components/candidate-lists/candidate-lists.component';
import { CandidateOverviewComponent } from './components/candidate-overview/candidate-overview.component';
import { CompanyListsComponent } from './components/company-lists/company-lists.component';
import { CompanyOverviewComponent } from './components/company-overview/company-overview.component';
import { JobListsComponent } from './components/job-lists/job-lists.component';
import { JobOverviewComponent } from './components/job-overview/job-overview.component';
import { ContactListsComponent } from './components/contact-lists/contact-lists.component';
import { ContactOverviewComponent } from './components/contact-overview/contact-overview.component';
import { DealListsComponent } from './components/deal-lists/deal-lists.component';
import { DealOverviewComponent } from './components/deal-overview/deal-overview.component';
import { MailboxComponent } from './components/mailbox/mailbox.component';
import { TaskComponent } from './components/task/task.component';
import { ReportComponent } from './components/report/report.component';
import { RevenueComponent } from './components/revenue/revenue.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { AuthGuard } from './auth/guard/auth.guard';
const routes: Routes = [
  { path:"login",component:LoginComponent },
  { path:"signup",component:RegisterComponent },
  { path:"forgotpassword",component:ForgetPasswordComponent },
  { path:"home",component:HomeComponent,canActivate:[AuthGuard] },
  { path:"candidates",component:CandidateListsComponent,canActivate:[AuthGuard] },
  { path:"candidates/:id",component:CandidateOverviewComponent,canActivate:[AuthGuard]  },
  { path:"companies",component:CompanyListsComponent,canActivate:[AuthGuard]  },
  { path:"companies/:id",component:CompanyOverviewComponent,canActivate:[AuthGuard]  },
  { path:"jobs",component:JobListsComponent,canActivate:[AuthGuard]  },
  { path:"jobs:/id",component:JobOverviewComponent,canActivate:[AuthGuard]  },
  { path:"contacts",component:ContactListsComponent,canActivate:[AuthGuard]  },
  { path:"contacts/:id",component:ContactOverviewComponent,canActivate:[AuthGuard]  },
  { path:"deals",component:DealListsComponent,canActivate:[AuthGuard]  },
  { path:"deals/:id",component:DealOverviewComponent,canActivate:[AuthGuard]  },
  { path:"mailbox",component:MailboxComponent,canActivate:[AuthGuard]  },
  { path:"tasks",component:TaskComponent,canActivate:[AuthGuard]  },
  { path:"reports",component:ReportComponent,canActivate:[AuthGuard]  },
  { path:"revenue",component:RevenueComponent,canActivate:[AuthGuard]  },
  { path:"settings",component:SettingsComponent,canActivate:[AuthGuard]  },
  { path:"**",redirectTo:"login"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
