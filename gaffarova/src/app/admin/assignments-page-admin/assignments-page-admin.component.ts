import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { from, Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { AddAssignmentsPageComponent } from '../add-assignments-page/add-assignments-page.component';
import { EditAssignmentsPageComponent } from '../edit-assignments-page/edit-assignments-page.component';
import { OpenAssignmentPageComponent } from '../../open-assignment-page/open-assignment-page.component';
import { MaterialService } from '../../shared/classes/material.service';
import { AssignmentVM } from '../../shared/classes/assignments';
import { AssignmentsService } from '../../shared/services/assignments/assignments.service';

@Component({
  selector: 'app-assignments-page-admin',
  templateUrl: './assignments-page-admin.component.html',
  styleUrls: ['./assignments-page-admin.component.css']
})
export class AssignmentsPageAdminComponent implements OnInit {

  public visible: boolean = true
  public displayedColumns: string[] = [ 'Id', 'Text',  'Deadline','Executors', 'Overdue', 'DateLastChange', 'Open', 'Edit', 'Delete']
  dirId: boolean = true
  dirCom: boolean = true
  isSortId: boolean = false
  isSortCom: boolean = false
  
  form: FormGroup

  public assignments$: Observable<AssignmentVM[]>

  constructor(public dialog: MatDialog, private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer, private assignmentsService: AssignmentsService) {
    this.iconRegistry.addSvgIcon('open', this.sanitizer.bypassSecurityTrustResourceUrl('assets/path/icon_open.svg'));
    this.iconRegistry.addSvgIcon('edit', this.sanitizer.bypassSecurityTrustResourceUrl('assets/path/icon_edit.svg'));
    this.iconRegistry.addSvgIcon('delete', this.sanitizer.bypassSecurityTrustResourceUrl('assets/path/icon_delete.svg'));
  }

  ngOnInit(): void {
    this.refresh()
    this.form = new FormGroup({
      fId: new FormControl(null),
      fText: new FormControl(null),
      fDead: new FormControl(null),
      fEx: new FormControl(null),
      fLast: new FormControl(null)
    })
  }

  isDone(ass: AssignmentVM): boolean {
    return ass.done === "Yes"
  }

  sort(assignments: AssignmentVM[]): AssignmentVM[] {
    if (this.isSortId) {
      if (this.dirId) {
        return assignments.sort((a, b) => a.id-b.id)
      } else {
        return assignments.sort((a, b) => b.id-a.id)
      }
    }

    if (this.isSortCom) {
      if (this.dirCom) {
        return assignments.sort((a, b) => Number(a.done)-Number(b.done))
      } else {
        return assignments.sort((a, b) => Number(b.done)-Number(a.done))
      }
    }

      return assignments
  }

  filter() {
    this.refresh()
    if (this.form.value.fId !== null) {
      this.assignments$ = this.assignments$.pipe(
        map(miss => miss.filter((m) => m.id === this.form.value.fId))
      )
    }

    if (this.form.value.fText !== null) {
      this.assignments$ = this.assignments$.pipe(
        map(miss => miss.filter((m) => m.text.indexOf(this.form.value.fText) !== -1))
      )
    }

    if (this.form.value.fEx !== null) {
      this.assignments$ = this.assignments$.pipe(
        map(miss => miss.filter((m) => m.executorsList.indexOf(this.form.value.fEx) !== -1))
      )
    }

  }

  refresh() {
    this.assignments$ = this.assignmentsService.fetch()
  }

  open(id: number) {
    const dialogRef = this.dialog.open(OpenAssignmentPageComponent, {
      width: '700px',
      data: id
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  delete(id: number) {
    this.assignmentsService.delete(id).subscribe(
      () => {
        MaterialService.toast('Assignment was successfully deleted')
        this.ngOnInit()
      } ,
      error => {
        MaterialService.toast(error.error.errorText)
      }
    )
  }

  add() {
    const dialogRef = this.dialog.open(AddAssignmentsPageComponent, {
      width: '700px'
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.ngOnInit()
    })
  }

  edit(id: number) {
    const dialogRef = this.dialog.open(EditAssignmentsPageComponent, {
      width: '700px',
      data: id
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


}
