import { Component, EventEmitter, input, output, Output } from '@angular/core';
import { Task } from '../tasks/dummy-tasks';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { User } from '../users/user';

@Component({
  selector: 'app-add-task',
  standalone: true,
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
  imports: [FormsModule,CommonModule]
})
export class AddTaskComponent {

  @Output() cancleDialog = new EventEmitter();

  newTask = output<Task>();

  selectedUser = input<User>();
  task: Task = this.getEmptyTask();

getEmptyTask(){
  return {
    id: '',
    userId: '',
    title: '',
    summary:
        '',
    dueDate: '',
}
}

  onSubmit(){
    this.task.userId = this.selectedUser()?.id;
    this.task.id = 't'+ Math.floor((Math.random() * 10) + 1);
    this.newTask.emit(this.task);
    this.task = this.getEmptyTask();
  }
  onCancel(){
    this.cancleDialog.emit();
  }
}
