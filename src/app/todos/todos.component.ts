import { Component, OnInit } from '@angular/core';
import { Todo } from '../shared/todo.model';
import { DataService } from '../shared/data.service';
import { NgForm, FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { EditTodoDialogComponent } from '../edit-todo-dialog/edit-todo-dialog.component';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-todos',
    templateUrl: './todos.component.html',
    styleUrls: ['./todos.component.scss'],
    imports: [FormsModule,CommonModule, TodoItemComponent],
    standalone: true
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  showvalidationErrors: boolean = true;
  constructor(private dataService: DataService, private dialog: MatDialog) { };

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

  toggleCompleted(todo: Todo) {
    todo.completed = !todo.completed;
  }
  editTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);

    let dialogRef = this.dialog.open(EditTodoDialogComponent, {
      width: "700px",
      data:todo
    });
    dialogRef.afterClosed().subscribe((result) =>{
      if(result){
        this.dataService.updateTodo(index,result);
      }
    })
  }
  deleteTodo(todo:Todo){
    const index = this.todos.indexOf(todo)
    this.dataService.deleteTodo(index)
  }
}
