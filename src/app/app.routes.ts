import { Routes } from '@angular/router';
import {SimpleFormComponent} from './simple-form/simple-form.component';
import {AboutComponent} from './about/about.component';

export const routes: Routes = [
  {
    path: 'form',
    component: SimpleFormComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }  ,
  {
    path: 'about/:username',
    component: AboutComponent
  }
];
