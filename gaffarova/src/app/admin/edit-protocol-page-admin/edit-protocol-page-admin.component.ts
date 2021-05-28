import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AssignmentVM } from 'src/app/shared/classes/assignments';
import { ExecutorVM } from 'src/app/shared/classes/executor';
import { MaterialService } from 'src/app/shared/classes/material.service';
import { ProtocolDTO, ProtocolVM } from 'src/app/shared/classes/protocol';
import { AssignmentsService } from 'src/app/shared/services/assignments/assignments.service';
import { ExecutorsService } from 'src/app/shared/services/executors/executors.service';
import { ProtocolsService } from 'src/app/shared/services/protocols/protocols.service';

@Component({
  selector: 'app-edit-protocol-page-admin',
  templateUrl: './edit-protocol-page-admin.component.html',
  styleUrls: ['./edit-protocol-page-admin.component.css']
})
export class EditProtocolPageAdminComponent implements OnInit {

  public assignmentsList: AssignmentVM[] = []
  public executorsList: ExecutorVM[] = []
  public protocol: ProtocolVM
  form: FormGroup

  constructor(public dialogRef: MatDialogRef<EditProtocolPageAdminComponent>, private executorsService: ExecutorsService, private protocolsService: ProtocolsService, private assignmentsService: AssignmentsService,
    @Inject(MAT_DIALOG_DATA) public data: number) { 
      MaterialService.updateTextFields();
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      head: new FormControl(null, [Validators.required]),
      date: new FormControl(null, [Validators.required]),
      assignments: new FormControl(null, [Validators.required])
    })

    this.protocolsService.open(this.data).subscribe(
      (data: ProtocolVM) => {
        this.protocol = data
        this.form.value.name = this.protocol.name
        this.form.value.date = this.protocol.date
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
    MaterialService.updateTextFields();
  }

  edit(): void {
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
        MaterialService.toast('Protocol was edited successfully')
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
