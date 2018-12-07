import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    this.getTasks();
    this.getTaskById
  }
  getTasks(){
    let tempObservable = this._http.get('/tasks')
    
    tempObservable.subscribe( data => console.log("Got yer tasks!", data))
  }
  getTaskById(data){
    let tempObservable = this._http.get(`/tasks/${data}`)
    tempObservable.subscribe(data =>console.log("!!!!!TASQUE!!!!!", data))
    return tempObservable
  }
}
