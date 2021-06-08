import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ActualDay } from './actual-day/actual-day.component';
import { TasksListComponent } from './actual-day/tasks-list/tasks-list.component';
import { SubtasksListComponent } from './actual-day/tasks-list/subtasks-list/subtasks-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ActualDay,
    TasksListComponent,
    SubtasksListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
