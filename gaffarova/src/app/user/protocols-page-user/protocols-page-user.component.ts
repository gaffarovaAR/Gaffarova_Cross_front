import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { OpenProtocolPageComponent } from 'src/app/open-protocol-page/open-protocol-page.component';
import { MaterialService } from 'src/app/shared/classes/material.service';
import { ProtocolVM } from 'src/app/shared/classes/protocol';
import { ProtocolsService } from 'src/app/shared/services/protocols/protocols.service';

@Component({
  selector: 'app-protocols-page-user',
  templateUrl: './protocols-page-user.component.html',
  styleUrls: ['./protocols-page-user.component.css']
})
export class ProtocolsPageUserComponent implements OnInit {

  public displayedColumns: string[] = [ 'Id', 'Name', 'Head', 'Date',  'AmountAssig', 'Open']

  public protocols$: Observable<ProtocolVM[]>
  form: FormGroup

  constructor(public dialog: MatDialog, private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer, private protocolsService: ProtocolsService) {
    this.iconRegistry.addSvgIcon('open', this.sanitizer.bypassSecurityTrustResourceUrl('assets/path/icon_open.svg'));
 }

  ngOnInit(): void {
    this.protocols$ = this.protocolsService.fetch()
    this.form = new FormGroup({
      fId: new FormControl(null),
      fThirstName: new FormControl(null),
      fSecondName: new FormControl(null),
      fThirdName: new FormControl(null),
      fPosition: new FormControl(null),
      fAss: new FormControl(null)
    })
      
  }

  refresh() {
    this.protocols$ = this.protocolsService.fetch()
  }

  open(id: number) {
    const dialogRef = this.dialog.open(OpenProtocolPageComponent, {
      width: '700px',
      data: id
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
