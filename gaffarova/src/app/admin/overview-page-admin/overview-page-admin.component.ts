import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, Subscription } from 'rxjs';
import { OpenExecutorPageComponent } from 'src/app/open-executor-page/open-executor-page.component';
import { ExecutorVM } from 'src/app/shared/classes/executor';
import { MaterialService } from 'src/app/shared/classes/material.service';
import { AssignmentsService } from 'src/app/shared/services/assignments/assignments.service';
import { ExecutorsService } from 'src/app/shared/services/executors/executors.service';


@Component({
  selector: 'app-overview-page-admin',
  templateUrl: './overview-page-admin.component.html',
  styleUrls: ['./overview-page-admin.component.css']
})
export class OverviewPageAdminComponent implements OnInit {

  aSub: Subscription
  public done: number
  public over: number
  public wait: number
  
  constructor(public dialog: MatDialog, private assignmentsService: AssignmentsService) { }

  ngOnInit(): void {
    this.assignmentsService.getAmDone().subscribe(
      (data: number) => {
        this.done = data
      },
      error => {
        MaterialService.toast(error.error.errorText)
      })
    this.assignmentsService.getAmOver().subscribe(
      (data: number) => {
        this.over = data
      },
      error => {
        MaterialService.toast(error.error.errorText)
      })
    this.assignmentsService.getAmWait().subscribe(
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