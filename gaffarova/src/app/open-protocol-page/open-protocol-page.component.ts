import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { AssignmentVM } from '../shared/classes/assignments';
import { MaterialService } from '../shared/classes/material.service';
import { ProtocolVM } from '../shared/classes/protocol';
import { AssignmentsService } from '../shared/services/assignments/assignments.service';
import { ProtocolsService } from '../shared/services/protocols/protocols.service';

@Component({
  selector: 'app-open-protocol-page',
  templateUrl: './open-protocol-page.component.html',
  styleUrls: ['./open-protocol-page.component.css']
})
export class OpenProtocolPageComponent implements OnInit {

  assignments$: Observable<AssignmentVM[]>
  protocol$: Observable<ProtocolVM>
  public displayedColumns: string[] = [ 'Id', 'Text',  'Deadline', 'Executors']
  
  constructor(public dialogRef: MatDialogRef<OpenProtocolPageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number, private protocolsService: ProtocolsService, private assignmentsService: AssignmentsService) { }

  ngOnInit(): void {
    this.protocol$ = this.protocolsService.open(this.data)
    this.assignments$ = this.assignmentsService.prot(this.data)
  }

}
