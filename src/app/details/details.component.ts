import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {

  @Input()
  messages: any = {};

  @Input()
  index: number = -1;

  @Output()
  delete: EventEmitter<number> = new EventEmitter<number>();


  onDelete(): void {
    this.delete.emit(this.index);
  }
}
