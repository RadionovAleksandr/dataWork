import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstTaskComponent } from './pages/first-task/first-task.component';
import { SecondTaskComponent } from './pages/second-task/second-task.component';
import { ThirdTaskComponent } from './pages/third-task/third-task.component';
import { FourthTaskComponent } from './pages/fourth-task/fourth-task.component';
import { FifthTaskComponent } from './pages/fifth-task/fifth-task.component';


const routes: Routes = [
  {path: 'first-task', component: FirstTaskComponent},
  {path: 'second-task', component: SecondTaskComponent},
  {path: 'third-task', component: ThirdTaskComponent},
  {path: 'fourth-task', component: FourthTaskComponent},
  {path: 'fifith-task', component: FifthTaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
