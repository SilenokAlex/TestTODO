import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material';
import { TaskTableComponent } from './task-table/task-table.component';

@NgModule({
  declarations: [
    TaskTableComponent
  ],
  imports:      [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers:    [],
  bootstrap:    [TaskTableComponent]
})
export class AppModule { }
