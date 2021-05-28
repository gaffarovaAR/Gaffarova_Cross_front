import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ExecutorVM } from '../../shared/classes/executor';
import { MaterialService } from '../../shared/classes/material.service';
import { AssignmentVM, AssignmentDTO } from '../../shared/classes/assignments';
import { ExecutorsService } from '../../shared/services/executors/executors.service';
import { AssignmentsService } from '../../shared/services/assignments/assignments.service';

@Component({
  selector: 'app-edit-assignments-page',
  templateUrl: './edit-assignments-page.component.html',
  styleUrls: ['./edit-assignments-page.component.css']
})
export class EditAssignmentsPageComponent implements OnInit {

  public executorsList: ExecutorVM[] = []
  form: FormGroup
  public assignment: AssignmentVM

  constructor(public dialogRef: MatDialogRef<EditAssignmentsPageComponent>, private assignmentsService: AssignmentsService, private executorsService: ExecutorsService,
    @Inject(MAT_DIALOG_DATA) public data: number) { 
      MaterialService.updateTextFields();
    
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      text: new FormControl(null, [Validators.required]),
      deadline: new FormControl(null, [Validators.required]),
      executorsID: new FormControl(null, [Validators.required])
    })
    //this.form.disable();
    
    this.assignmentsService.open(this.data).subscribe(
      (data: AssignmentVM) => {
        this.assignment = data
        this.form.value.text = this.assignment.text
        this.form.value.deadline = this.assignment.deadline
      },
      error => {
        MaterialService.toast(error.error.errorText)
        this.form.enable()
        this.dialogRef.close()
      }
    )

    this.executorsService.fetch().subscribe(
      (data: ExecutorVM[]) => {
        this.executorsList = data
      } ,
      error => {
        MaterialService.toast(error.error.errorText)
        this.form.enable()
        this.dialogRef.close()
      }
    )
    MaterialService.updateTextFields();
  }

  edit(): void {
    let miss: AssignmentDTO
    this.form.disable();
    let executorList: number[]=[]
    for(let e of this.form.value.executors)
    {
      executorList.push(e.id)
    }

    miss = { text: this.form.value.text, deadline: this.form.value.deadline, executorsID: executorList}
    this.assignmentsService.add(miss).subscribe(
      () => {
        MaterialService.toast('Assignment was successfully edited')
        this.dialogRef.close()
      },
      error => {
        MaterialService.toast(error.error.errorText)
        this.form.enable();
      })
  }

  cancel(): void {
    this.dialogRef.close();
  }

}
