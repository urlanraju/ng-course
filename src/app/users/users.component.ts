import { Component, computed, EventEmitter, input, Input, Output } from '@angular/core';

@Component({
  selector: 'app-users',
  standalone: false,
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

  @Input() userId! :string;
  imgPath = input.required<string>();
  @Input({required : true}) userName : string = '';

  @Input({required:true}) isSelected! : boolean;

  @Output() selectedUser = new EventEmitter();

  alertMe(){
    this.selectedUser.emit({id : this.userId, name : this.userName, avatar : this.fullImgPath()});
    console.log(this.userName + ' Yes sir !');
  }

  fullImgPath = computed(()=>'/assets/users/'+this.imgPath());
  
  // get fullImgPath(){
  //   return '/assets/users/'+this.imgPath();
  // }
}
