import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ExecutorDTO, ExecutorVM } from '../../shared/classes/executor';
import { MaterialService } from '../../shared/classes/material.service';
import { AssignmentVM } from '../../shared/classes/assignments';
import { ExecutorsService } from '../../shared/services/executors/executors.service';
import { AssignmentsService } from '../../shared/services/assignments/assignments.service';
import { Md5 } from 'ts-md5';

@Component({
  selector: 'app-edit-executor-page',
  templateUrl: './edit-executor-page.component.html',
  styleUrls: ['./edit-executor-page.component.css']
})
export class EditExecutorPageComponent implements OnInit {

  form: FormGroup
  executor: ExecutorVM

  constructor(public dialogRef: MatDialogRef<EditExecutorPageComponent>, private executorsService: ExecutorsService,
    @Inject(MAT_DIALOG_DATA) public data: number) { 
      MaterialService.updateTextFields();
    
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      thirstName: new FormControl(null, [Validators.required]),
      secondName: new FormControl(null, [Validators.required]),
      thirdName: new FormControl(null, [Validators.required]),
      position: new FormControl(null, [Validators.required]),
      login: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
    })

    this.executorsService.open(this.data).subscribe(
      (data: ExecutorVM) => {
        this.executor = data
      },
      error => {
        MaterialService.toast(error.error.errorText)
        this.dialogRef.close()
      }
    )
    MaterialService.updateTextFields();

  }

  edit(): void {
    this.form.disable();
    let emp = new ExecutorDTO(this.form.value.thirstName, this.form.value.secondName, this.form.value.thirdName, this.form.value.position, this.form.value.login, this.form.value.password)
    if (this.form.value.password !== null)
      emp.password = Md5.hashStr(this.form.value.password) as string
    this.executorsService.edit(this.data, emp).subscribe(
      () => {
        MaterialService.toast('Executor was edited successfully')
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
