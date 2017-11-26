import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatNativeDateModule,
  MatDatepickerModule,
  MatGridListModule,
  MatToolbarModule,
  MatButtonModule,
  MatDialogModule,
  MatSelectModule,
  MatInputModule,
  MatChipsModule,
  MatCardModule,
  MatMenuModule,
  MatIconModule,
  MatListModule,
} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { TaskDialogComponent } from './task-dialog/task-dialog.component';
import { TaskComponent } from './task/task.component';
import { HeaderComponent } from './header/header.component';
import { FilterByStatus } from './filters/filter.pipe';
import { SearchTask } from './filters/search.pipe';
import { AppComponent } from './app.component';
import { StorageService } from './services/storage/storage.service';
import { TaskService } from './services/task/task.service';

@NgModule({
  declarations:    [
    TaskDialogComponent,
    TaskComponent,
    HeaderComponent,
    AppComponent,
    SearchTask,
    FilterByStatus,
  ],
  imports:         [
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatGridListModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatSelectModule,
    MatInputModule,
    MatChipsModule,
    BrowserModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
    FormsModule
  ],
  entryComponents: [TaskDialogComponent],
  providers:       [TaskService, StorageService],
  bootstrap:       [AppComponent]
})

export class AppModule {
}
