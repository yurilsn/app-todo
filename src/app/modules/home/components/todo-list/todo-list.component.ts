import { Component, OnInit } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit{

  taskList: Array<TaskList> = [
    // {task: 'Task 1', checked: true},
    // {task: 'Task 2', checked: false},

  ];

  ngOnInit(): void { 
      console.log(!this.taskList.length)
  }

}
