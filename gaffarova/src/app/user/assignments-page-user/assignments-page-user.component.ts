import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { from, Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { OpenAssignmentPageComponent } from '../../open-assignment-page/open-assignment-page.component';
import { MaterialService } from '../../shared/classes/material.service';
import { AssignmentVM, AssignmentExVM } from '../../shared/classes/assignments';
import { AssignmentsService } from '../../shared/services/assignments/assignments.service';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-assignments-page-user',
  templateUrl: './assignments-page-user.component.html',
  styleUrls: ['./assignments-page-user.component.css']
})
export class AssignmentsPageUserComponent implements OnInit {

  public visible: boolean = true
  public displayedColumns: string[] = [ 'Id', 'Text',  'Deadline', 'Overdue', 'Open']
  dirId: boolean = true
  dirCom: boolean = true
  isSortId: boolean = false
  isSortCom: boolean = false
  
  form: FormGroup

  public assignments$: Observable<AssignmentExVM[]>

  constructor(public dialog: MatDialog, private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer, private assignmentsService: AssignmentsService,
    private auth: AuthService) {
    this.iconRegistry.addSvgIcon('open', this.sanitizer.bypassSecurityTrustResourceUrl('assets/path/icon_open.svg'));
 }

  ngOnInit(): void {
    this.refresh()
    this.form = new FormGroup({
      fId: new FormControl(null),
      fText: new FormControl(null),
      fDead: new FormControl(null),
      fLast: new FormControl(null)
    })
  }

  sort(assignments: AssignmentExVM[]): AssignmentExVM[] {
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
  }

  refresh() {
    this.assignments$ = this.assignmentsService.fetchex(this.auth.getName())
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
}
