import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistoryServiceService {
  searches: any[];

  constructor() {
    this.searches = [];
  }

  pushSearch(queryText: string) {
    this.searches.push({searchText: queryText, timestamp: new Date()});

    // debug
    console.log(this.searches);
  }

  getHistory() {
    return this.searches;
  }
}
