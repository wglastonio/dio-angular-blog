import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [ RouterLink ],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent {
  currentDate: string = '';

  @Input()
  id: string = '0';
  
  @Input()
  bigCardPicture: string = '';

  @Input()
  bigCardTitle: string = '';

  @Input()
  bigCardContent: string = '';
  
  constructor() {
    this.currentDate = newDate();
  }

}

function newDate(): string {
  const today = new Date();
  const dd = today.getDate();
  const mm = today.toLocaleString('default', { month: 'long' });
  const yyyy = today.getFullYear();
  return mm + ' ' + dd + ', ' + yyyy;
}
