import { Routes } from '@angular/router';
import { TodosComponent } from './todos/todos.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: TodosComponent,
  }
];