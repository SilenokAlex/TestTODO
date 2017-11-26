import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MAT_PLACEHOLDER_GLOBAL_OPTIONS, MatChipInputEvent } from '@angular/material';
import { ENTER } from '@angular/cdk/keycodes';

const COMMA = 188;

@Component({
  selector:    'task-dialog',
  templateUrl: './task-dialog.component.html',
  styleUrls:   ['./task-dialog.component.css'],
  providers:   [
    { provide:  MAT_PLACEHOLDER_GLOBAL_OPTIONS,
      useValue: { float: 'always' }
    }
  ]
})

export class TaskDialogComponent implements OnInit {
  removable: boolean = true;
  addOnBlur: boolean = true;
  separatorKeysCodes = [ENTER, COMMA];

  constructor(public dialogRef: MatDialogRef<TaskDialogComponent>, @Inject(MAT_DIALOG_DATA) public task: any) {
  }

  ngOnInit() {
  }

  addTag(event: MatChipInputEvent): void {
    let input = event.input;
    let tag = event.value;

    if ((tag || '').trim()) {
      this.task.tags.push(tag.trim());
    }

    if (input) {
      input.value = '';
    }
  }

  removeTag(tag: any): void {
    let index = this.task.tags.indexOf(tag);

    if (index >= 0) {
      this.task.tags.splice(index, 1);
    }
  }

  cancel(): void {
    this.dialogRef.close();
  }

  create(): void {
    if (TaskDialogComponent.isValidForm(this.task)) {
      this.addTimestamp();
      this.dialogRef.close(this.task);
    }
  }

  addTimestamp() {
    let [year, month, date] = this.task.date.split('-');
    let [hours, minutes] = this.task.time.split(':');
    this.task.timestamp = new Date(year, month - 1, date, hours, minutes).getTime();
  }

  static isValidForm({ title, date, time }) {
    return title && date && time;
  }
}
