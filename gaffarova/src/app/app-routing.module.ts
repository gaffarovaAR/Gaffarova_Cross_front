import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddExecutorPageComponent } from './admin/add-executor-page/add-executor-page.component';
import { ExecutorsPageAdminComponent } from './admin/executors-page-admin/executors-page-admin.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AssignmentsPageAdminComponent } from './admin/assignments-page-admin/assignments-page-admin.component';
import { OpenExecutorPageComponent } from './open-executor-page/open-executor-page.component';
import { OverviewPageUserComponent } from './user/overview-page-user/overview-page-user.component';
import { AuthGuardUser } from './shared/classes/auth.guard.user';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { SiteLayoutAdminComponent } from './admin/site-layout-admin/site-layout-admin.component';
import { AuthGuardAdmin } from './shared/classes/auth.guard.admin';
import { AssignmentsPageUserComponent } from './user/assignments-page-user/assignments-page-user.component';
import { ExecutorsPageUserComponent } from './user/executors-page-user/executors-page-user.component';
import { OverviewPageAdminComponent } from './admin/overview-page-admin/overview-page-admin.component';
import { SiteLayoutUserComponent } from './user/site-layout-user/site-layout-user.component';
import { AuthChildAdminGuard } from './shared/classes/auth.child.admin.guard';
import { WaitPageComponent } from './admin/wait-page/wait-page.component';
import { ProtocolsPageUserComponent } from './user/protocols-page-user/protocols-page-user.component';
import { ProtocolsPageAdminComponent } from './admin/protocols-page-admin/protocols-page-admin.component';

const routes: Routes = [
  {
    path: '', component: AuthLayoutComponent, children: [
      {path: '', redirectTo: '/login', pathMatch: 'full'},
      {path: 'login', component: LoginPageComponent}
    ]
  },
  {
    path: 'site-user', component: SiteLayoutUserComponent, canActivate: [AuthGuardUser], children: [
      {path: '', redirectTo: '/site-user/overview-user', pathMatch: 'full'},
      {path: 'overview-user', component: OverviewPageUserComponent},
      {path: 'protocols-user', component: ProtocolsPageUserComponent},   
      {path: 'executors-user', component: ExecutorsPageUserComponent},     
      {path: 'assignments-user', component: AssignmentsPageUserComponent}     
    ]
  },
  {
    path: 'site-admin', component: SiteLayoutAdminComponent, canActivate: [AuthGuardAdmin], children: [
      {path: '', redirectTo: '/site-admin/overview-admin', pathMatch: 'full'},
      {path: 'overview-admin', component: OverviewPageAdminComponent},  
      {path: 'protocols-admin', component: ProtocolsPageAdminComponent},   
      {path: 'executors-admin', component: ExecutorsPageAdminComponent},     
      {path: 'assignments-admin', component: AssignmentsPageAdminComponent},     
      {path: 'waiting', component: WaitPageComponent}       
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
