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
import { AddProtocolPageAdminComponent } from '../add-protocol-page-admin/add-protocol-page-admin.component';
import { EditProtocolPageAdminComponent } from '../edit-protocol-page-admin/edit-protocol-page-admin.component';

@Component({
  selector: 'app-protocols-page-admin',
  templateUrl: './protocols-page-admin.component.html',
  styleUrls: ['./protocols-page-admin.component.css']
})
export class ProtocolsPageAdminComponent implements OnInit {

  public displayedColumns: string[] = [ 'Id', 'Name', 'Head', 'Date',  'AmountAssig', 'Open', 'Edit', 'Delete']

  public protocols$: Observable<ProtocolVM[]>
  form: FormGroup

  constructor(public dialog: MatDialog, private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer, private protocolsService: ProtocolsService) {
    this.iconRegistry.addSvgIcon('open', this.sanitizer.bypassSecurityTrustResourceUrl('assets/path/icon_open.svg'));
    this.iconRegistry.addSvgIcon('edit', this.sanitizer.bypassSecurityTrustResourceUrl('assets/path/icon_edit.svg'));
    this.iconRegistry.addSvgIcon('delete', this.sanitizer.bypassSecurityTrustResourceUrl('assets/path/icon_delete.svg'));
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

  delete(id: number) {
    this.protocolsService.delete(id).subscribe(
      () => {
        MaterialService.toast('Protocol was successfully deleted')
        this.ngOnInit()
      } ,
      error => {
        MaterialService.toast(error.error.errorText)
      }
    )
  }

  add() {
    const dialogRef = this.dialog.open(AddProtocolPageAdminComponent, {
      width: '700px'
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.ngOnInit()
    })
  }

  edit(id: number) {
    const dialogRef = this.dialog.open(EditProtocolPageAdminComponent, {
      width: '700px',
      data: id
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
