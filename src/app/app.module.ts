import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstTaskComponent } from './pages/first-task/first-task.component';
import { SecondTaskComponent } from './pages/second-task/second-task.component';
import { ThirdTaskComponent } from './pages/third-task/third-task.component';
import { FourthTaskComponent } from './pages/fourth-task/fourth-task.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstTaskComponent,
    SecondTaskComponent,
    ThirdTaskComponent,
    FourthTaskComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
