import { Component, DoCheck, OnInit } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck{

  taskList: Array<TaskList> = JSON.parse(localStorage.getItem('list') || '[]');

  ngDoCheck(): void {
    this.setLocalStorage();
  }

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

  validationInput(event: string, index:number){

    if(!event.length){
    const confirm = window.confirm('A task está vazia, deseja deletar ? ')
    if(confirm){
      this.deleteItem(index)
    }
    }
  }

  setLocalStorage(){
    if(this.taskList){
      this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked));
      localStorage.setItem('list', JSON.stringify(this.taskList));
    }
  }

  

}
