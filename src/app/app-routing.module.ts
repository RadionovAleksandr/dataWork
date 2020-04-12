import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstTaskComponent } from './pages/first-task/first-task.component';


const routes: Routes = [
  {
    path: 'first-task', component: FirstTaskComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
