import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Md5 } from 'ts-md5';
import { ExecutorDTO } from '../../shared/classes/executor';
import { MaterialService } from '../../shared/classes/material.service';
import { ExecutorsService } from '../../shared/services/executors/executors.service';

@Component({
  selector: 'app-add-executor-page',
  templateUrl: './add-executor-page.component.html',
  styleUrls: ['./add-executor-page.component.css']
})
export class AddExecutorPageComponent implements OnInit {

  form: FormGroup

  constructor(public dialogRef: MatDialogRef<AddExecutorPageComponent>, private executorsService: ExecutorsService) { 
    
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
  }

  create(): void {
    this.form.disable();
    this.form.value.password = Md5.hashStr(this.form.value.password) as string
    this.executorsService.add(this.form.value).subscribe(
      () => {
        MaterialService.toast('Executor was created successfully')
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
