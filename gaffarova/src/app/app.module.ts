import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { SiteLayoutAdminComponent } from './admin/site-layout-admin/site-layout-admin.component';
import { TokenInterceptor } from './shared/classes/token-interceptor';
import { OverviewPageUserComponent } from './user/overview-page-user/overview-page-user.component';
import { ExecutorsPageAdminComponent } from './admin/executors-page-admin/executors-page-admin.component';
import { AssignmentsPageAdminComponent } from './admin/assignments-page-admin/assignments-page-admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoaderComponent } from './loader/loader.component';
import { OpenExecutorPageComponent } from './open-executor-page/open-executor-page.component';
import { MatListModule } from '@angular/material/list';
import { AddExecutorPageComponent } from './admin/add-executor-page/add-executor-page.component';
import { EditExecutorPageComponent } from './admin/edit-executor-page/edit-executor-page.component';
import { AddAssignmentsPageComponent } from './admin/add-assignments-page/add-assignments-page.component';
import { OpenAssignmentPageComponent } from './open-assignment-page/open-assignment-page.component';
import { EditAssignmentsPageComponent } from './admin/edit-assignments-page/edit-assignments-page.component';
import { AssignmentsPageUserComponent } from './user/assignments-page-user/assignments-page-user.component';
import { ExecutorsPageUserComponent } from './user/executors-page-user/executors-page-user.component';
import { OverviewPageAdminComponent } from './admin/overview-page-admin/overview-page-admin.component';
import { SiteLayoutUserComponent } from './user/site-layout-user/site-layout-user.component';
import { WaitPageComponent } from './admin/wait-page/wait-page.component';
import { ProtocolsPageAdminComponent } from './admin/protocols-page-admin/protocols-page-admin.component';
import { ProtocolsPageUserComponent } from './user/protocols-page-user/protocols-page-user.component';
import { OpenProtocolPageComponent } from './open-protocol-page/open-protocol-page.component';
import { AddProtocolPageAdminComponent } from './admin/add-protocol-page-admin/add-protocol-page-admin.component';
import { EditProtocolPageAdminComponent } from './admin/edit-protocol-page-admin/edit-protocol-page-admin.component';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    AuthLayoutComponent,
    SiteLayoutAdminComponent,
    SiteLayoutUserComponent,
    OverviewPageAdminComponent,
    OverviewPageUserComponent,
    ExecutorsPageAdminComponent,
    ExecutorsPageUserComponent,
    AssignmentsPageAdminComponent,
    AssignmentsPageUserComponent,
    OpenExecutorPageComponent,
    OpenAssignmentPageComponent,
    AddExecutorPageComponent,
    AddAssignmentsPageComponent,
    EditExecutorPageComponent,
    EditAssignmentsPageComponent,
    LoaderComponent,
    WaitPageComponent,
    ProtocolsPageAdminComponent,
    ProtocolsPageUserComponent,
    OpenProtocolPageComponent,
    AddProtocolPageAdminComponent,
    EditProtocolPageAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatListModule,
    MatSelectModule,
    MatDatepickerModule,
    MatCheckboxModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: TokenInterceptor
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
