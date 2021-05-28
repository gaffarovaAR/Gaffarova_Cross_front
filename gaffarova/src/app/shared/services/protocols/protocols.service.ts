import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SRV_URL } from 'src/app/config';
import { ProtocolDTO, ProtocolVM } from '../../classes/protocol';

@Injectable({
  providedIn: 'root'
})
export class ProtocolsService {

  constructor(private http: HttpClient) { }

  fetch(): Observable<ProtocolVM[]> {
    return this.http.get<ProtocolVM[]>(`${SRV_URL}/api/Protocols`)
  }

  open(id: number): Observable<ProtocolVM> {
    return this.http.get<ProtocolVM>(`${SRV_URL}/api/Protocols/${id}`)
  }

  edit(id: number, exec: ProtocolDTO): Observable<any> {
    return this.http.put<any>(`${SRV_URL}/api/Protocols/${id}`, exec)
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${SRV_URL}/api/Protocols/${id}`)
  }

  add(exec: ProtocolDTO): Observable<any> {
    return this.http.post<any>(`${SRV_URL}/api/Protocols`, exec)
  }
}
