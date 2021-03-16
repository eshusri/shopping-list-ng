import { Component, OnInit } from '@angular/core';
import { ToDo } from '../../model/ToDo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos:ToDo[] = [];
  pendingTodos:ToDo[] =[];
  TaskToDo:string = "";
  OwnerToDo:string = "";
  constructor() { }

  ngOnInit() {
  }
  addToDo () {
    this.todos.push({
      Task:this.TaskToDo,
      Owner:this.OwnerToDo,
      Completed:false
    })
    this.TaskToDo = "";
    this.OwnerToDo = ""
  }

  removeToDo(todoname:string, id:number):void{
    if(todoname === "todo")
    this.todos = this.todos.filter((v,i) => i!==id)
    if(todoname === "pendingtodo")
    this.pendingTodos = this.pendingTodos.filter((v,i) => i!==id)
  }

  pendingToDo(id:number):void{
    this.pendingTodos = this.todos.filter((v,i) => i === id)
    this.removeToDo("todo",id)
  }

}
