import { Pipe, PipeTransform } from '@angular/core';

function filterTask(task, statusStr) {
  switch (statusStr) {
    case 'All': {
      return true;
    }
    case 'Actual': {
      return !task.completed;
    }
    case 'Completed': {
      return task.completed;
    }
    default: {
      return true;
    }
  }
}

@Pipe({ name: 'filterByStatus' })
export class FilterByStatus implements PipeTransform {
  transform(tasks, searchStr) {
    return tasks.filter((task) => filterTask(task, searchStr));
  }
}
