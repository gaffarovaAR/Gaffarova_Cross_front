import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ExecutorVM } from '../shared/classes/executor';
import { MaterialService } from '../shared/classes/material.service';
import { AssignmentsService } from '../shared/services/assignments/assignments.service';
import { AuthService } from '../shared/services/auth/auth.service';
import { ExecutorsService } from '../shared/services/executors/executors.service';

@Component({
  selector: 'app-open-executor-page',
  templateUrl: './open-executor-page.component.html',
  styleUrls: ['./open-executor-page.component.css']
})
export class OpenExecutorPageComponent implements OnInit {

  public executor$: Observable<ExecutorVM>
  public done: number
  public over: number
  public wait: number

  constructor(public dialogRef: MatDialogRef<OpenExecutorPageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number, private executorsService: ExecutorsService,
    public assignmentsService: AssignmentsService, private auth: AuthService) { }

  ngOnInit(): void {
    this.executor$ = this.executorsService.open(this.data)
    console.log('Executor', this.executor$)
    this.assignmentsService.getExAmDone(this.auth.getName()).subscribe(
      (data: number) => { this.done = data },
      error => {
        MaterialService.toast(error.error.errorText)
        this.dialogRef.close()
      }
    )
    this.assignmentsService.getExAmOver(this.auth.getName()).subscribe(
      (data: number) => { this.over = data },
      error => {
        MaterialService.toast(error.error.errorText)
        this.dialogRef.close()
      }
    )
    this.assignmentsService.getExAmWait(this.auth.getName()).subscribe(
      (data: number) => { this.wait = data },
      error => {
        MaterialService.toast(error.error.errorText)
        this.dialogRef.close()
      }
    )
  }

}
