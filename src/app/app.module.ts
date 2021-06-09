import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ActualDay } from './actual-day/actual-day.component';
import { TasksListComponent } from './actual-day/tasks-list/tasks-list.component';
import { TodosComponent } from './actual-day/tasks-list/todos/todos.component';
import { EventsComponent } from './actual-day/tasks-list/events/events.component';
import { ShoppingsComponent } from './actual-day/tasks-list/shoppings/shoppings.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ActualDay,
    TasksListComponent,
    TodosComponent,
    EventsComponent,
    ShoppingsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
