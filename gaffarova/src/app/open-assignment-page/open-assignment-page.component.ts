import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { AssignmentVM } from '../shared/classes/assignments';
import { AssignmentsService } from '../shared/services/assignments/assignments.service';

@Component({
  selector: 'app-open-assignment-page',
  templateUrl: './open-assignment-page.component.html',
  styleUrls: ['./open-assignment-page.component.css']
})
export class OpenAssignmentPageComponent implements OnInit {

  public assignment$: Observable<AssignmentVM>

  constructor(public dialogRef: MatDialogRef<OpenAssignmentPageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number, private assignmentsService: AssignmentsService) { }

  ngOnInit(): void {
    this.assignment$ = this.assignmentsService.open(this.data)
    console.log('Assignment', this.assignment$)
  }


}
