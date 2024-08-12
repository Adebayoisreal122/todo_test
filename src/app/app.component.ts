import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoappComponent } from "./todoapp/todoapp.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodoappComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo_app';
}
