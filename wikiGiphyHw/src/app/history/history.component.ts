import { Component, OnInit } from '@angular/core';
import {HistoryServiceService} from '../history-service.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor(private historyServ: HistoryServiceService) { }

  ngOnInit() {
  }

}
