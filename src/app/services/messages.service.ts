import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  message: string = '';

  constructor() {}

  add(message: string) {
    this.message = message;

    setTimeout(() => {
      this.clear();
    }, 4 * 1000);
  }

  clear() {
    this.message = '';
  }
}
