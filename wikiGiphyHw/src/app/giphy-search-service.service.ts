import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GiphySearchServiceService {
  URL: string;
  params: string;
  API: string;

  constructor(private http: HttpClient) {
    this.URL = 'https://api.giphy.com/v1/gifs/search?api_key=';
    this.params = 'limit=5&offset=0&rating=G&lang=en';
    this.API = '1ITrFnOALxb0lIKvxGLA3mgpKJCLQAw9';
  }

  giphySearch(searchText){
    const query = `${this.URL}${this.API}&q=${searchText}&${this.params}`;

    const resultsObs = this.http.get(query)
      .pipe(map(response => response['data']
        .map(result => result['images']['original']['url'])));
    return resultsObs;
  }
}
