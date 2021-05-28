import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AssignmentVM } from 'src/app/shared/classes/assignments';
import { ExecutorVM } from 'src/app/shared/classes/executor';
import { MaterialService } from 'src/app/shared/classes/material.service';
import { ProtocolDTO } from 'src/app/shared/classes/protocol';
import { AssignmentsService } from 'src/app/shared/services/assignments/assignments.service';
import { ExecutorsService } from 'src/app/shared/services/executors/executors.service';
import { ProtocolsService } from 'src/app/shared/services/protocols/protocols.service';

@Component({
  selector: 'app-add-protocol-page-admin',
  templateUrl: './add-protocol-page-admin.component.html',
  styleUrls: ['./add-protocol-page-admin.component.css']
})
export class AddProtocolPageAdminComponent implements OnInit {

  public assignmentsList: AssignmentVM[] = []
  public executorsList: ExecutorVM[] = []
  form: FormGroup

  constructor(public dialogRef: MatDialogRef<AddProtocolPageAdminComponent>, private executorsService: ExecutorsService, private protocolsService: ProtocolsService, private assignmentsService: AssignmentsService) { 
    
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      head: new FormControl(null, [Validators.required]),
      date: new FormControl(null, [Validators.required]),
      assignments: new FormControl(null, [Validators.required])
    })
    
    this.executorsService.fetch().subscribe(
      (data: ExecutorVM[]) => {
        this.executorsList = data
      } ,
      error => {
        MaterialService.toast(error.error.errorText)
        this.dialogRef.close()
      }
    )

    this.assignmentsService.fetch().subscribe(
      (data: AssignmentVM[]) => {
        this.assignmentsList = data
      } ,
      error => {
        MaterialService.toast(error.error.errorText)
        this.dialogRef.close()
      }
    )
  }

  create(): void {
    this.form.disable();
    let protocol: ProtocolDTO;
    protocol.name = this.form.value.Name
    protocol.headID = this.form.value.head.id
    protocol.date = this.form.value.date

    let assignmentList: number[]=[]
    for(let e of this.form.value.assignments)
    {
      assignmentList.push(e.id)
    }

    this.protocolsService.add(protocol).subscribe(
      () => {
        MaterialService.toast('Protocol was created successfully')
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