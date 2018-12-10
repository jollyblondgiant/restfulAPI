import { Component, OnInit } from '@angular/core';

import { HttpService } from './http.service';
import { $ } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title : String
  tasks : object
  taskByID
  seeTasks: boolean
  seeDeets: boolean
  upDeets: boolean  
  userNum: number
  newTask: any
  updateTask: any
  thisTask:string
  constructor(private _httpService: HttpService){
  
  }
  ngOnInit(){
      this.seeTasks = false
      this.upDeets = false
      this.seeDeets = false
      this.newTask = {
        title: "",
        description: ""
      }
      this.updateTask = {
        title: "",
        description: ""
      }
  }

  getTasksFromService(){
    let tempObservable = this._httpService.getTasks()
    tempObservable.subscribe( data => this.tasks = data)
  }
  
  showTasks(){
    this.getTasksFromService()
    this.seeTasks = true
    
    
  }
  getDeets(task){
    this.thisTask = task
    this.seeDeets = true
    let observable = this._httpService.getTaskbyID(task._id)
    observable.subscribe(data =>{
      console.log(data)
      this.taskByID = data})
    
  }
  onSubmit(){
    console.log(this.newTask)
    console.log(this.newTask.title)
    let observable = this._httpService.addTask(this.newTask)
    observable.subscribe(data => console.log("NEW TASK!", data))

    console.log("NEW TASK!")

  }
  deleteTask(){
    console.log("BALEETED", this.thisTask)
    let observable = this._httpService.destroyTask(this.thisTask)
    observable.subscribe(data => console.log("ALL IS DUST"))
    this.seeDeets = false
    
  }
  editTask(){
    console.log("YOU MEDDLE WITH FATE", this.thisTask)
    console.log(this.updateTask)
    let observable = this._httpService.editTask(this.thisTask, this.updateTask)
    observable.subscribe(data => console.log("IT IS DONE", data))
    this.upDeets = false
  }
}
