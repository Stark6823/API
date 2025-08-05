import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; // Corrected: removed extra space

@Injectable({
  providedIn: 'root'
})
export class DummyService {

  
  constructor(private http: HttpClient) { }
  getDummyData(): Observable<any> {
    console.log("hello");

    return this.http.get('https://microsoftedge.github.io/Demos/json-dummy-data/64KB.json');
  }
}