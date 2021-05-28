import { AfterViewInit, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { merge, Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { AddExecutorPageComponent } from '../add-executor-page/add-executor-page.component';
import { EditExecutorPageComponent } from '../edit-executor-page/edit-executor-page.component';
import { OpenExecutorPageComponent } from '../../open-executor-page/open-executor-page.component';
import { MaterialService } from '../../shared/classes/material.service';
import { ExecutorsService } from '../../shared/services/executors/executors.service';
import { ExecutorVM } from 'src/app/shared/classes/executor';
@Component({
  selector: 'app-executors-page-admin',
  templateUrl: './executors-page-admin.component.html',
  styleUrls: ['./executors-page-admin.component.css']
})

export class ExecutorsPageAdminComponent implements OnInit {
  
  public displayedColumns: string[] = [ 'Id', 'ThirstName', 'SecondName', 'ThirdName',  'Position', 'AmountAssig', 'Open', 'Edit', 'Delete']

  public executors$: Observable<ExecutorVM[]>
  form: FormGroup
  public visible: boolean = true
  dirId: boolean = true
  dirAss: boolean = true
  isSortId: boolean = false
  isSortAss: boolean = false

  constructor(public dialog: MatDialog, private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer, private executorsService: ExecutorsService) {
    this.iconRegistry.addSvgIcon('open', this.sanitizer.bypassSecurityTrustResourceUrl('assets/path/icon_open.svg'));
    this.iconRegistry.addSvgIcon('edit', this.sanitizer.bypassSecurityTrustResourceUrl('assets/path/icon_edit.svg'));
    this.iconRegistry.addSvgIcon('delete', this.sanitizer.bypassSecurityTrustResourceUrl('assets/path/icon_delete.svg'));
  }

  ngOnInit(): void {
    this.executors$ = this.executorsService.fetch()
    this.form = new FormGroup({
      fId: new FormControl(null),
      fThirstName: new FormControl(null),
      fSecondName: new FormControl(null),
      fThirdName: new FormControl(null),
      fPosition: new FormControl(null),
      fAss: new FormControl(null)
    })
      
  }

  sort(executors: ExecutorVM[]): ExecutorVM[] {
    if (this.isSortId) {
      if (this.dirId) {
        return executors.sort((a, b) => a.id-b.id)
      } else {
        return executors.sort((a, b) => b.id-a.id)
      }
    }

    if (this.isSortAss) {
      if (this.dirAss) {
        return executors.sort((a, b) => a.amountAssig-b.amountAssig)
      } else {
        return executors.sort((a, b) => b.amountAssig-a.amountAssig)
      }
    }
    
    return executors
  }


  filter() {
    this.executors$ = this.executorsService.fetch()
    if (this.form.value.fId !== null) {
      this.executors$ = this.executors$.pipe(
        map(exec => exec.filter((e) => e.id === this.form.value.fId))
      )
    }

    if (this.form.value.fThirstName !== null) {
      this.executors$ = this.executors$.pipe(
        map(exec => exec.filter((e) => e.thirstName.indexOf(this.form.value.fThirstName) !== -1))
      )
    }

    if (this.form.value.fSecondName !== null) {
      this.executors$ = this.executors$.pipe(
        map(exec => exec.filter((e) => e.secondName.indexOf(this.form.value.fSecondName) !== -1))
      )
    }

    if (this.form.value.fThirdName !== null) {
      this.executors$ = this.executors$.pipe(
        map(exec => exec.filter((e) => e.thirdName.indexOf(this.form.value.fThirdName) !== -1))
      )
    }

    if (this.form.value.fPosition !== null) {
      this.executors$ = this.executors$.pipe(
        map(exec => exec.filter((e) => e.position.indexOf(this.form.value.fPosition) !== -1))
      )
    }

    if (this.form.value.fAss !== null) {
      this.executors$ = this.executors$.pipe(
        map(exec => exec.filter((e) => e.amountAssig === this.form.value.fAss))
      )
    }

  }

  refresh() {
    this.executors$ = this.executorsService.fetch()
  }

  open(id: number) {
    const dialogRef = this.dialog.open(OpenExecutorPageComponent, {
      width: '700px',
      data: id
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  delete(id: number) {
    this.executorsService.delete(id).subscribe(
      () => {
        MaterialService.toast('Executor was successfully deleted')
        this.ngOnInit()
      } ,
      error => {
        MaterialService.toast(error.error.errorText)
      }
    )
  }

  add() {
    const dialogRef = this.dialog.open(AddExecutorPageComponent, {
      width: '700px'
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.ngOnInit()
    })
  }

  edit(id: number) {
    const dialogRef = this.dialog.open(EditExecutorPageComponent, {
      width: '700px',
      data: id
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.refresh();
    });
  }

}
