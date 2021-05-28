import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AddExecutorPageComponent } from '../add-executor-page/add-executor-page.component';
import { AddAssignmentsPageComponent } from '../add-assignments-page/add-assignments-page.component';
import { MaterialService } from '../../shared/classes/material.service';
import { AuthService } from '../../shared/services/auth/auth.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-site-layout-admin',
  templateUrl: './site-layout-admin.component.html',
  styleUrls: ['./site-layout-admin.component.css']
})
export class SiteLayoutAdminComponent implements AfterViewInit {

  @ViewChild('floating') floatingRef: ElementRef

  links = [
    {url: '/site-admin/overview-admin', name: 'Analytics'},
    {url: '/site-admin/protocols-admin', name: 'Protocols'},
    {url: '/site-admin/executors-admin', name: 'Executors'},
    {url: '/site-admin/assignments-admin', name: 'Assignments'},
    {url: '/site-admin/waiting', name: 'Waiting'},
  ]

  constructor(private auth: AuthService, private router: Router, private route: ActivatedRoute, public dialog: MatDialog, private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) { 
    this.iconRegistry.addSvgIcon('logo', this.sanitizer.bypassSecurityTrustResourceUrl('assets/path/logo.svg')); }

  ngAfterViewInit() {
    MaterialService.initializeFloatingButton(this.floatingRef)
  }

  logout(event: Event) {
    event.preventDefault()
    this.auth.logout()
    this.router.navigate(['/login'])
  }

  ngOnInit() {
  }

}
