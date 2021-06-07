import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ActualDay } from './actual-day/actual-day.component';
import { Events } from './actual-day/events/events.component';
import { PreparationItem } from './actual-day/events/preparation-item/preparation-item.component';
import { TodosComponent } from './actual-day/todos/todos.component';
import { StepComponent } from './actual-day/todos/step/step.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ActualDay,
    Events,
    PreparationItem,
    TodosComponent,
    StepComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
