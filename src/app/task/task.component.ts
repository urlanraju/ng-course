import { Component, Input } from '@angular/core';
import { Task } from '../tasks/dummy-tasks';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
  standalone: false,
})
export class TaskComponent {

  @Input() task?: Task;
}
