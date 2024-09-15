import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { BrowserModule } from "@angular/platform-browser"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { AppComponent } from "./app.component"
import { RouterOutlet } from "@angular/router"
import { HeaderComponent } from "./header/header.component"
import { UsersComponent } from "./users/users.component"
import { TasksComponent } from "./tasks/tasks.component"
import { TaskComponent } from "./task/task.component";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UsersComponent,
    TasksComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // FeatherModule.pick(allIcons) what is pick method,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterOutlet
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }