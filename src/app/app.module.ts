import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ActualDay } from './actual-day/actual-day.component';
import { TasksListComponent } from './actual-day/tasks-list/tasks-list.component';
import { TodosComponent } from './actual-day/tasks-list/todos/todos.component';
import { EventsComponent } from './actual-day/tasks-list/events/events.component';
import { ShoppingsComponent } from './actual-day/tasks-list/shoppings/shoppings.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthenticationService } from './services/authentication.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ActualDay,
    TasksListComponent,
    TodosComponent,
    EventsComponent,
    ShoppingsComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthenticationService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
