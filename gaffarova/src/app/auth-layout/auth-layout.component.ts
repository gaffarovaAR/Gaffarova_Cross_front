import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MaterialService } from '../shared/classes/material.service';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.css']
})
export class AuthLayoutComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) { 
    this.iconRegistry.addSvgIcon('logo', this.sanitizer.bypassSecurityTrustResourceUrl('assets/path/logo.svg'));
  }

  ngOnInit(): void {
  }

}
