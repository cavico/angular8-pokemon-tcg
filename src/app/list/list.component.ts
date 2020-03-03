import { Component } from '@angular/core';
import { CardsService } from 'src/app/services/cards.service';
import { Cards, Card } from 'src/app/common/interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  items$: Observable<Card[]>;

  constructor(
    private cardsService: CardsService
  ) {
    this.items$ = cardsService.getAll();
  }

  trackByFn(index: number, item: Card) {
    return item.id;
  }

}
