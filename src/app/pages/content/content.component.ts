import { Component, Input } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { dataFake } from '../../repository/dataFake';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [ RouterLink ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

  private id: string | null = '0';

  @Input()
  contentPicture: string = '';

  @Input()
  contentTitle: string = '';

  @Input()
  contentContent: string = '';

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(
      value => this.id = value.get('id'));
      this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id: string | null) {
    const result = dataFake.filter(article => article.id == id)[0];
    this.contentPicture = result.picture;
    this.contentTitle = result.title;
    this.contentContent = result.content;
  }
}
