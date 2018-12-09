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
  constructor(private _httpService: HttpService){
  
  }
  ngOnInit(){
        
  }

  getTasksFromService(){
    let tempObservable = this._httpService.getTasks()
    tempObservable.subscribe( data => this.tasks = data)
  }
  do(){
    console.log("^^^^^CLICK!^^^^^")
  }
  doMore(num: number) : void{
    console.log(`CLICK WITH PARAM: ${num}`)
    let observable = this._httpService.postToServer({data:num})
    observable.subscribe(data => console.log("GOT DATA", data))
  }
  showTasks(){
    this.getTasksFromService()
    
    
  }
  getDeets(id){
    console.log(`ID: ${id}`)
    let observable = this._httpService.getTaskbyID(id)
    observable.subscribe(data =>{
      console.log(data)
       this.taskByID = data})
    
  }
}
