import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
task:any
id:any
list:any=[];
  constructor(){}
  ngOnInit(): void {
  }


addTask(task:any){
  this.list.push({id:this.list.length,task:task})
}
remove(id:any){
  this.list=this.list.filter((item:any)=>item.id!==id)
}
completed(id:any){
  
}


}
