import { Component, OnInit } from '@angular/core';
import { HistoryServiceService} from '../history-service.service';
import { GiphySearchServiceService } from '../giphy-search-service.service';
import { WikiSearchServiceService } from '../wiki-search-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searches: any[];
  wikiRes: string[];
  giphyRes: string[];

  constructor(private wikiServ: WikiSearchServiceService, private giphyServ: GiphySearchServiceService, private historyServ: HistoryServiceService ) {
    this.searches = [];
    this.wikiRes = [];
    this.giphyRes = [];
  }

  ngOnInit() {
  }

  submit(queryText: string) {
    console.log(`searching for ${queryText}`);
    this.historyServ.pushSearch(queryText);
    this.wikiServ.wikiSearch(queryText).subscribe(results => this.wikiRes = results);
    this.giphyServ.giphySearch(queryText).subscribe(results => this.giphyRes = results);
  }
}
