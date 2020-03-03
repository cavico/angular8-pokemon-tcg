import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Card, Cards } from 'src/app/common/interface';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  route = 'cards';

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Card[]> {
    const apiUrl = `${environment.api.url}/${environment.api.version}/${this.route}`;
    return this.http.get(apiUrl)
      .pipe(
        map(
          (res: Cards) => res.cards
        )
      );
  }
}
