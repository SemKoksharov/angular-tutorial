import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {DetailsComponent} from '../details/details.component';
import {FirstService} from '../services/first.service';

@Component({
  selector: 'app-simple-form',
  standalone: true,
  imports: [FormsModule, CommonModule, DetailsComponent],
  templateUrl: './simple-form.component.html',
  styleUrl: './simple-form.component.scss'
})

export class SimpleFormComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  isSubmitted: boolean = false;
  messages: Array<any> = [];



  constructor(private service: FirstService) {
    this.messages = this.service.getAllMessages();
    this.isSubmitted = this.messages.length > 0
  }

   protected readonly onsubmit = onsubmit;

  onSubmit() {
    console.log('::: Form submitted :::');
    this.isSubmitted = true;
    this.service.insert({
      "name": this.name,
      "email": this.email,
      "message": this.message
    });
    console.log(this.messages);
  }

  deleteMessage(index: number) {
    this.service.deleteMessage(index)
  }
}
