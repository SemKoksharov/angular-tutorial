import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {SimpleFormComponent} from './simple-form/simple-form.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {MenuComponent} from './menu/menu.component';
import {AboutComponent} from './about/about.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SimpleFormComponent, FormsModule, MenuComponent, AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})


export class AppComponent {
  title: string = "World!";
}
