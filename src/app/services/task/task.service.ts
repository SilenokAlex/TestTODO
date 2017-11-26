import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { StorageService } from '../storage/storage.service';

const TASKS_KEY = 'allTask';

@Injectable()
export class TaskService {
  tasks: Subject<any> = new Subject<any>();

  constructor(private storageService: StorageService) {
    if (!this.storageService.getItem(TASKS_KEY)) {
      this.storageService.setItem(TASKS_KEY, []);
    }
  }

  getTasks() {
    try {
      const tasks: any[] = this.storageService.getItem(TASKS_KEY);
      this.tasks.next(tasks);
    } catch (err) {
      throw err;
    }
  }

  addTask(task) {
    try {
      const tasks: any[] = this.storageService.getItem(TASKS_KEY);
      tasks.push(task);
      this.storageService.setItem(TASKS_KEY, tasks);
      this.tasks.next(tasks);
    } catch (err) {
      throw err;
    }
  }

  removeTask(task) {
    try {
      let tasks: any[] = this.storageService.getItem(TASKS_KEY);
      let index = TaskService.getTaskIndex(tasks, task);
      tasks.splice(index, 1);
      this.storageService.setItem(TASKS_KEY, tasks);
      this.tasks.next(tasks);
    } catch (err) {
      throw err;
    }
  }

  editTask(task) {
    try {
      let tasks: any[] = this.storageService.getItem(TASKS_KEY);
      let index = TaskService.getTaskIndex(tasks, task);
      tasks[index] = task;
      this.storageService.setItem(TASKS_KEY, tasks);
      this.tasks.next(tasks);
    } catch (err) {
      throw err;
    }
  }

  completeTask(task) {
    try {
      let tasks: any[] = this.storageService.getItem(TASKS_KEY);
      let index = TaskService.getTaskIndex(tasks, task);
      tasks[index].completed = true;
      this.storageService.setItem(TASKS_KEY, tasks);
      this.tasks.next(tasks);
    } catch (err) {
      throw err;
    }
  }

  notifyTask(task) {
    try {
      let tasks: any[] = this.storageService.getItem(TASKS_KEY);
      let index = TaskService.getTaskIndex(tasks, task);
      tasks[index].notified = true;
      this.storageService.setItem(TASKS_KEY, tasks);
      this.tasks.next(tasks);
    } catch (err) {
      throw err;
    }
  }

  resetTasksNotified() {
    try {
      let tasks: any[] = this.storageService.getItem(TASKS_KEY);
      tasks.forEach((task) => {
        if (task.completed !== task.notified) {
          task.notified = false;
        }
      });
      this.storageService.setItem(TASKS_KEY, tasks);
      this.tasks.next(tasks);
    } catch (err) {
      throw err;
    }
  }

  static getTaskIndex(tasks, task) {
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].id === task.id) {
        return i;
      }
    }
  }
}
