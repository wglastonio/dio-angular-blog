import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [ RouterLink ],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent {
  currentDate: string = '';

  @Input()
  id: string = '0';
  
  @Input()
  smallCardPicture: string = '';

  @Input()
  smallCardTitle: string = '';
  
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

