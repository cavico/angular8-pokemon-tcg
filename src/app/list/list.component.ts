import { Component } from '@angular/core';
import { CardsService } from 'src/app/services/cards.service';
import { Card } from 'src/app/common/interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  items$: Observable<Card[]>;
  search = '';


  constructor(
    private cardsService: CardsService
  ) {
    this.getData();
  }

  getData(name?: string) {
    const params: any = {};

    params.supertype = 'Pokémon';
    if (name) {
      params.name = name;
    }

    this.items$ = this.cardsService.getAll(params)
      .pipe(
        map(
          (data: Card[]) => {
            data.sort(this.sortByName);
            return data;
          }
        )
      );
  }

  trackByFn(index: number, item: Card) {
    return item.id;
  }

  sortByName(a: Card, b: Card) {
    return a.name < b.name ? -1 : 1;
  }

  onSearch() {
    this.getData(this.search);
  }

}
