import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SRV_URL } from 'src/app/config';
import { AssignmentVM, AssignmentDTO, AssignmentExVM } from '../../classes/assignments';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {

  constructor(private http: HttpClient) {

   }

  fetch(): Observable<AssignmentVM[]> {
    return this.http.get<AssignmentVM[]>(`${SRV_URL}/api/Assignments`)
  }

  fetchex(username: string): Observable<AssignmentExVM[]> {
    return this.http.get<AssignmentExVM[]>(`${SRV_URL}/api/Assignments/Executor/${username}`)
  }

  open(id: number): Observable<AssignmentVM> {
    return this.http.get<AssignmentVM>(`${SRV_URL}/api/Assignments/${id}`)
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${SRV_URL}/api/Assignments/${id}`)
  }

  add(ass: AssignmentDTO): Observable<any> {
    return this.http.post<any>(`${SRV_URL}/api/Assignments`, ass)
  }

  edit(id: number, ass: AssignmentDTO): Observable<any> {
    return this.http.put<any>(`${SRV_URL}/api/Assignments/${id}`, ass)
  }

  getEx(id: number): Observable<AssignmentExVM> {
    return this.http.get<AssignmentExVM>(`${SRV_URL}/api/Assignments/Executor/${id}`)
  }

  getOver(): Observable<AssignmentVM> {
    return this.http.get<AssignmentVM>(`${SRV_URL}/api/Assignments/Overdue`)
  }

  getNoDone(): Observable<AssignmentVM> {
    return this.http.get<AssignmentVM>(`${SRV_URL}/api/Assignments/NoDone`)
  }

  getAmDone(): Observable<number> {
    return this.http.get<number>(`${SRV_URL}/api/Assignments/AmountDone`)
  }

  getAmOver(): Observable<number> {
    return this.http.get<number>(`${SRV_URL}/api/Assignments/AmountOver`)
  }

  getAmWait(): Observable<number> {
    return this.http.get<number>(`${SRV_URL}/api/Assignments/AmountWait`)
  }

  getExAmDone(username: string): Observable<number> {
    return this.http.get<number>(`${SRV_URL}/api/Assignments/Executor/${username}/AmountDone`)
  }

  getExAmOver(username: string): Observable<number> {
    return this.http.get<number>(`${SRV_URL}/api/Assignments/Executor/${username}/AmountOver`)
  }

  getExAmWait(username: string): Observable<number> {
    return this.http.get<number>(`${SRV_URL}/api/Assignments/Executor/${username}/AmountWait`)
  }

  setDone(id: number): Observable<any> {
    return this.http.put<any>(`${SRV_URL}/api/Assignments/${id}/SetDone`, null)
  }

  prot(id: number): Observable<AssignmentVM[]> {
    return this.http.get<AssignmentVM[]>(`${SRV_URL}/api/Assignments/Protocol/${id}`)
  }
}