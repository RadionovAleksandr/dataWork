import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstTaskComponent } from './pages/first-task/first-task.component';
import { SecondTaskComponent } from './pages/second-task/second-task.component';


const routes: Routes = [
  {path: 'first-task', component: FirstTaskComponent},
  {path: 'first-task', component: SecondTaskComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
