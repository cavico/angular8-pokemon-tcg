import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
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

  getAll(supertype?: string): Observable<Card[]> {
    const params = new HttpParams()
      .set('supertype', supertype);

    const url = `${environment.api.url}/${environment.api.version}/${this.route}`;
    return this.http.get(url, { params })
      .pipe(map((res: Cards) => res.cards));
  }

  get(id: string): Observable<Card> {
    const url = `${environment.api.url}/${environment.api.version}/${this.route}/${id}`;
    return this.http.get(url)
      .pipe(map((res: Card) => res.card));
  }
}
