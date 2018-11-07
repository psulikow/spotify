import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class WikiSearchServiceService {
  URL: string;

  constructor(private http: HttpClient) {
    this.URL =
      'https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=10&srsearch=';

  }

  wikiSearch(searchText) {
    const query = `${this.URL}/${searchText}`;
    const resultsObs = this.http.get(query).pipe(
      map(response => response['query'].search.map(result => result['title'])));
    return resultsObs;
  }
}
