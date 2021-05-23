import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    { path: '', loadChildren:()=> import('./todolist/todo.module').then(m => m.TodoModule) },
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
