import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { User } from '../users/user';
import { DUMMY_TASKS, Task } from './dummy-tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  standalone: false
})
export class TasksComponent {

  tasks: Task[] = DUMMY_TASKS;
  userData = input<User>();

  @Output() displayAddTaskDiv = new EventEmitter<boolean>();

  @Input() newTask!: Task;

  get getUserTasks() {
    console.log(this.userData()?.id);
    const tasks = this.tasks.filter(t => t.userId == this.userData()?.id);
    if (this.newTask !== undefined)
      this.tasks.push(this.newTask);
    return tasks;
  }
  deleteTask(taskId: string) {
    this.tasks = this.tasks.filter(t => t.id != taskId);
  }
}
