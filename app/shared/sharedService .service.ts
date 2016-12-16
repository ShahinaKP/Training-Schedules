import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class SharedService {
  data: String;

  constructor() { }

  setData(data: String) {
    this.data = data;
  }
}