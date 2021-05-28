import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { OpenAssignmentPageComponent } from 'src/app/open-assignment-page/open-assignment-page.component';
import { AssignmentVM } from 'src/app/shared/classes/assignments';
import { MaterialService } from 'src/app/shared/classes/material.service';
import { AssignmentsService } from 'src/app/shared/services/assignments/assignments.service';

@Component({
  selector: 'app-wait-page',
  templateUrl: './wait-page.component.html',
  styleUrls: ['./wait-page.component.css']
})
export class WaitPageComponent implements OnInit {

  public visible: boolean = true
  public displayedColumns: string[] = [ 'Confirm', 'Id', 'Text',  'Deadline','Executors', 'Overdue', 'DateLastChange', 'Open']
  dirId: boolean = true
  dirCom: boolean = true
  isSortId: boolean = false
  isSortCom: boolean = false
  
  form: FormGroup

  public assignments$: Observable<AssignmentVM[]>

  constructor(public dialog: MatDialog, private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer, private assignmentsService: AssignmentsService) {
    this.iconRegistry.addSvgIcon('open', this.sanitizer.bypassSecurityTrustResourceUrl('assets/path/icon_open.svg'));
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
    .pipe(
      map(ass => ass.sort((a, b) => Number(b.done)-Number(a.done)))
    )
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

  confirm(id: number) {
    this.assignmentsService.setDone(id)
    .subscribe(
      (data: any) => {
        MaterialService.toast(`The state of the assignment with ID = ${id} was changed`);
        this.refresh()
      },
      error => {
        MaterialService.toast(error.error.errorText)
      }
    )
  }


}

