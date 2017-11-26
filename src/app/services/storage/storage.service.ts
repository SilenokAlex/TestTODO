import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {
  getItem(key: string) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (err) {
      throw new Error('Failed to get data from localStorage');
    }
  }

  setItem(key: string, value: {}) {
    try {
      return localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      throw new Error('Failed to set data to localStorage');
    }
  }

}
