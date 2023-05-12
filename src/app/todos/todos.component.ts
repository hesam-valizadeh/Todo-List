import { Component, OnInit } from '@angular/core';
import { Todo } from '../shared/todo.model';
import { DataService } from '../shared/data.service';
import { FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  showvalidationErrors: boolean = true;
  constructor(private dataService: DataService) { };

  ngOnInit(): void {
    this.todos = this.dataService.getAllTodos();
  }
  onFormSubmit(form: NgForm) {
    // if (form.invalid) return this.showvalidationErrors = true;
       if (form.invalid) return alert('Form is invalid');
       this.dataService.addTodo(new Todo(form.value.todoInput));
       this.showvalidationErrors = false;
       form.reset();

  }
}
