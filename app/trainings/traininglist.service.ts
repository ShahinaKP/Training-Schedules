import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class TrainingListService {
  constructor(private http: Http) { }
  
  getTrainings() {
    return this.http.get('assets/json/trainings.json')
      .map(response => response.json());
  }
}