import { Component, OnDestroy, OnInit } from '@angular/core';
import { TaskService } from './services/task/task.service';
import { MAT_PLACEHOLDER_GLOBAL_OPTIONS } from '@angular/material';

@Component({
  selector:    'app-root',
  templateUrl: './app.component.html',
  styleUrls:   ['./app.component.css'],
  providers:   [
    TaskService,
    { provide:  MAT_PLACEHOLDER_GLOBAL_OPTIONS,
      useValue: { float: 'never' }
    }
  ]
})

export class AppComponent implements OnInit, OnDestroy {
  status: string[] = ['All', 'Actual', 'Completed'];
  actualStatus: string = this.status[0];
  searchStr: string = '';
  tasks: any[];
  observer: any;

  constructor(private taskService: TaskService) {
  }

  ngOnInit() {
    this.observer = this.taskService.tasks.subscribe((tasks) => this.tasks = tasks);
    this.taskService.getTasks();
    this.taskService.resetTasksNotified();
    setInterval(() => this.checkTask(), 10000);
  }

  ngOnDestroy() {
    this.observer.unsubscribe();
  }

  checkTask() {
    const actualTasks = this.tasks.filter((task) => !task.completed);
    const notNotifiedTasks = actualTasks.filter((task) => !task.notified);
    const currentTimestamp = Date.now();

    notNotifiedTasks.forEach((task) => {
      if (currentTimestamp > task.timestamp) {
        this.notify(task);
      }
    });
  }

  notify(task) {
    const title = task.title;
    const options = {
      icon: '../assets/img/notification-icon.png',
      body: task.tags.join(', '),
    };

    if (!('Notification' in window)) {
      alert('Sorry, your browser don\'t support notifications!');
    }

    const Notification = window['Notification'];
    let notification;
    if (Notification.permission === 'granted') {
      notification = new Notification(title, options);
    } else if (Notification.permission !== 'denied') {
      Notification.requestPermission((permission) => {
        if (permission === 'granted') {
          notification = new Notification(title, options);
        }
      });
    }

    this.taskService.notifyTask(task);
  }
}
