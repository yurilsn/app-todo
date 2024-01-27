import { Component, OnInit } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit{

  taskList: Array<TaskList> = [];

  deleteItem(index:number): void{
    this.taskList.splice(index, 1);
  }

  deleteAllItens(){
    const confirm = window.confirm("Deseja deletar todos as Tasks da lista ?");
    if(confirm){
      this.taskList = [];
    }
  }

  addTask(task:string):void{
    this.taskList.push({task: task, checked: false})
  }

  ngOnInit(): void { 
    
  }

}
