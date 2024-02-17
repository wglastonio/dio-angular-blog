import { Component } from '@angular/core';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent {
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

