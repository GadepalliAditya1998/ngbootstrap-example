import { Component } from "@angular/core";
import { BsModalRef } from "ngx-bootstrap/modal";
import { Task } from "../models/task.model";

@Component({
    selector: 'todo-list-add-task',
    templateUrl: './add-task.component.html',
})
export class AddTodoTaskComponent {
    public task: Task;
    public onSave: any;

    public constructor(
        private bsModalRef: BsModalRef,
    ) {
        this.task = new Task({});
    }

    public onAddTask(): void {
        this.closeModal();
        if (this.onSave)
            this.onSave(this.task);
    }

    public get isValid(): boolean {
        return this.task.name !== null && this.task.name !== undefined && this.task.name.trim().length > 0;
    }

    public closeModal(): void {
        this.bsModalRef.hide();
    }
}