import { Component, input, OnInit } from '@angular/core';
import { User } from '../users/user';
import { DUMMY_TASKS, Task} from './dummy-tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  standalone: false
})
export class TasksComponent {

  tasks: Task[] = DUMMY_TASKS;
  userData = input<User>();

  get getUserTasks(){
    console.log(this.userData()?.id);
    return this.tasks.filter(t=>t.userId == this.userData()?.id);
  }

}
