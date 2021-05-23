import { Component } from "@angular/core";
import { BsModalService } from "ngx-bootstrap/modal";
import { AddTodoTaskComponent } from "../add-task/add-task.component";
import { Task } from "../models/task.model";
@Component({
    selector: 'todo-list',
    templateUrl: './todo-list.component.html',
})
export class TodoListComponent {
    public tasks: Array<Task>;

    public constructor(
        private modalService: BsModalService,
    ) {
        this.tasks = new Array<Task>();
    }

    public openAddTaskModal(): void {
        const state = {
            onSave: (task: Task) => {
                task.id = this.tasks.length == 0 ? 1 : this.tasks[this.tasks.length - 1].id;
                this.tasks.push(task);
            },
        };
        this.modalService.show(AddTodoTaskComponent, { initialState: state, keyboard: false, ignoreBackdropClick: true });
    }
}