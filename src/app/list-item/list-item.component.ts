import { Component, Input } from '@angular/core';
import { Card } from 'src/app/common/interface';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent {

  @Input() data: Card;

  constructor() { }

}
