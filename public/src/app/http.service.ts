import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
  
  }
  getTasks(){
    return this._http.get('/tasks')
    
  }

  getTaskbyID(id:string){
    return this._http.get(`/tasks/${id}`)
  }

  postToServer(num){
    return this._http.post(`/tasks`, num)
  }
  addTask(newTask){
    return this._http.post('/tasks', newTask)
  }
  destroyTask(task){
    return this._http.delete(`/tasks/${task}`)
  }
  editTask(task, updateTask){
    return this._http.put(`/tasks/${task}`, updateTask)
  }
}
