import { Pipe, PipeTransform } from '@angular/core';

function includesStr(task, searchStr) {
  searchStr = searchStr.toLowerCase();

  const title = task.title.toLowerCase();
  const tags = task.tags.map((tag) => tag.toLowerCase());

  return title.includes(searchStr) || tags.some((tag) => tag.includes(searchStr));
}

@Pipe({ name: 'searchTask' })
export class SearchTask implements PipeTransform {
  transform(tasks, searchStr) {
    return tasks.filter((task) => includesStr(task, searchStr));
  }
}
