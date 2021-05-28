import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ExecutorVM } from '../../shared/classes/executor';
import { MaterialService } from '../../shared/classes/material.service';
import { AssignmentDTO } from '../../shared/classes/assignments';
import { ExecutorsService } from '../../shared/services/executors/executors.service';
import { AssignmentsService } from '../../shared/services/assignments/assignments.service';

@Component({
  selector: 'app-add-assignments-page',
  templateUrl: './add-assignments-page.component.html',
  styleUrls: ['./add-assignments-page.component.css']
})
export class AddAssignmentsPageComponent implements OnInit {

  public executorsList: ExecutorVM[] = []
  form: FormGroup

  constructor(public dialogRef: MatDialogRef<AddAssignmentsPageComponent>, private assignmentsService: AssignmentsService, private executorsService: ExecutorsService) { 
    
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      text: new FormControl(null, [Validators.required]),
      deadline: new FormControl(null, [Validators.required]),
      executorsID: new FormControl(null, [Validators.required])
    })
    
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
  }

  create(): void {
    this.form.disable();
    let executorList: number[]=[]
    for(let e of this.form.value.executors)
    {
      executorList.push(e.id)
    }

    this.assignmentsService.add(this.form.value).subscribe(
      () => {
        MaterialService.toast('Assignment was created successfully')
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
