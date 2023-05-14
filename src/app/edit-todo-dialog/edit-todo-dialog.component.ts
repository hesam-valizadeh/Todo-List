import { Component,Inject  } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Todo } from '../shared/todo.model';

@Component({
  selector: 'app-edit-todo-dialog',
  templateUrl: './edit-todo-dialog.component.html',
  styleUrls: ['./edit-todo-dialog.component.scss']
})
export class EditTodoDialogComponent {

  constructor(
    public dialogRef:MatDialogRef<EditTodoDialogComponent> ,
    @Inject(MAT_DIALOG_DATA) public todo: Todo
    ){

  }

  close(){
    this.dialogRef.close();
  }
  onFormSubmit(form:NgForm){
    // this.todo.text = form.value.text;
    if (form.invalid) return;
    
    const updateTodo = {
      ...this.todo,
      ...form.value
    }
    this.dialogRef.close(updateTodo)
  }
}
