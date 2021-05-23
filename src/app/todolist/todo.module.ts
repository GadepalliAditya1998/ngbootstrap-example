import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BootstrapModule } from '../ngx-bootstrap/boostrap.module';

import { AddTodoTaskComponent } from './add-task/add-task.component';
import { TodoListComponent } from './list/todo-list.component';
import { TodoRoutingModule } from './todolist-routing.module';

@NgModule({
    imports: [
        TodoRoutingModule,
        BootstrapModule,
        CommonModule,
        FormsModule,
    ],
    declarations: [
        TodoListComponent,
        AddTodoTaskComponent,
    ],
})
export class TodoModule { }
