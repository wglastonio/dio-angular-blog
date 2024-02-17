import { Component } from '@angular/core';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent {
  currentDate: string = '';
  
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
