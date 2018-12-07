import { Component, OnInit } from '@angular/core';

import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Hell, motherfucker';
  constructor(private _httpService: HttpService){
  
  }
  ngOnInit(){
    this.getTaskByID("5c0977824612ff9b5cc8a2b0")
  }
  getTaskByID(data){
    console.log("FUCK THIS", data)
    let tamp = this._httpService.getTaskById(data)
    tamp.subscribe(function(task){
      console.log(task, "YOU'RE GONNA MAKE IT")
    }) 
  }
}
