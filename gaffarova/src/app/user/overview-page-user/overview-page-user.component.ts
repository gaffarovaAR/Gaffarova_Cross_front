import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, Subscription } from 'rxjs';
import { OpenExecutorPageComponent } from 'src/app/open-executor-page/open-executor-page.component';
import { ExecutorVM } from 'src/app/shared/classes/executor';
import { MaterialService } from 'src/app/shared/classes/material.service';
import { AssignmentsService } from 'src/app/shared/services/assignments/assignments.service';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { ExecutorsService } from 'src/app/shared/services/executors/executors.service';


@Component({
  selector: 'app-overview-page-user',
  templateUrl: './overview-page-user.component.html',
  styleUrls: ['./overview-page-user.component.css']
})
export class OverviewPageUserComponent implements OnInit {

  aSub: Subscription
  public done: number
  public over: number
  public wait: number
  
  constructor(public dialog: MatDialog, private assignmentsService: AssignmentsService, private auth: AuthService) { }

  ngOnInit(): void {
    this.assignmentsService.getExAmDone(this.auth.getName()).subscribe(
      (data: number) => {
        this.done = data
      },
      error => {
        MaterialService.toast(error.error.errorText)
      })
    this.assignmentsService.getExAmOver(this.auth.getName()).subscribe(
      (data: number) => {
        this.over = data
      },
      error => {
        MaterialService.toast(error.error.errorText)
      })
    this.assignmentsService.getExAmWait(this.auth.getName()).subscribe(
      (data: number) => {
        this.wait = data
      },
      error => {
        MaterialService.toast(error.error.errorText)
      })
  }

  round(value: number): number {
    return Math.round(value)
  }
}