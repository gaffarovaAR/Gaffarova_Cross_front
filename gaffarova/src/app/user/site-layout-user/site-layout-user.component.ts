import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MaterialService } from '../../shared/classes/material.service';
import { AuthService } from '../../shared/services/auth/auth.service';

@Component({
  selector: 'app-site-layout-user',
  templateUrl: './site-layout-user.component.html',
  styleUrls: ['./site-layout-user.component.css']
})
export class SiteLayoutUserComponent implements AfterViewInit {

  @ViewChild('floating') floatingRef: ElementRef

  links = [
    {url: '/site-user/overview-user', name: 'Analytics'},
    {url: '/site-user/protocols-user', name: 'Protocols'},
    // {url: '/site-user/executors-user', name: 'Executors'},
    {url: '/site-user/assignments-user', name: 'Assignments'},
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
