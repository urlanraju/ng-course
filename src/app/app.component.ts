import { Component, OnInit } from '@angular/core';
import { USERS } from './users/users-data';
import { User } from './users/user';
import { Task } from './tasks/dummy-tasks';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  onSelectUser(user: User) {
    console.log('On select user from app : ' + user);
    this.selectedUser = user;
  }
  addNewTask(task : Task){
    this.newTask = task;
  }
  newTask! : Task;
  showAddTaskDiv = false;
  selectedUser?: User;
  users: User[] = USERS;
  title = 'Angular world!';
}
