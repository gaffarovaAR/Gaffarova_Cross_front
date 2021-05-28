import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SRV_URL } from 'src/app/config';
import { ExecutorVM, ExecutorDTO } from '../../classes/executor';

@Injectable({
  providedIn: 'root'
})
export class ExecutorsService {

  constructor(private http: HttpClient) {

   }

  fetch(): Observable<ExecutorVM[]> {
    return this.http.get<ExecutorVM[]>(`${SRV_URL}/api/Executors`)
  }

  open(id: number): Observable<ExecutorVM> {
    return this.http.get<ExecutorVM>(`${SRV_URL}/api/Executors/${id}`)
  }

  edit(id: number, exec: ExecutorDTO): Observable<any> {
    return this.http.put<any>(`${SRV_URL}/api/Executors/${id}`, exec)
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${SRV_URL}/api/Executors/${id}`)
  }

  add(exec: ExecutorDTO): Observable<any> {
    return this.http.post<any>(`${SRV_URL}/api/Executors`, exec)
  }

  // koff(): Observable<EmployerKoff[]> {
  //   return this.http.get<EmployerKoff[]>(`${SRV_URL}/api/Employer/koff`)
  // }
}
