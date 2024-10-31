import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirstService {

  messages: Array<any> = [];

  constructor() {
    this.init()
  }

  init(): void {

    this.insert({
      name: 'Sam',
      email: 'sam@mail.com',
      message: 'hello world!'
    })

    this.insert({
      name: 'John Doe',
      email: 'john@mail.com',
      message: 'John hello dlrow!'
    })

    this.insert({
      name: 'Arthur Chansy',
      email: 'sam@sam.com',
      message: 'Arthur olleh world!'
    })
  }

  insert(message: { name: string, email: string, message: string }): void {
    if (message.name.length === 0 || message.email.length === 0 || message.message.length === 0) {
      alert("You must fill all fields\nYou must fill all fields\nYou must fill all fields\nYou must fill all fields\nBASTARDO DI MERDA!");
      return;
    }
    this.messages.push(message)
  }

  getAllMessages(): Array<any> {
    return this.messages;
  }

  deleteMessage(index: number) {
    this.messages.splice(index, 1);
  }
}
