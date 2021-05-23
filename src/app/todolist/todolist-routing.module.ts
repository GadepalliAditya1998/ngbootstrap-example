import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './list/todo-list.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', redirectTo: 'list' },
        { path: 'list', component: TodoListComponent },
    ])],
})
export class TodoRoutingModule { }
