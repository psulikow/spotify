import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  searches: any[];
  firstName: string;
  lastName: string;
  result: string;
  loginForm: FormGroup;
  constructor(private dashboardService: DashboardService, private formBuilder: FormBuilder) {
    this.searches = [];
  }

  searchHistory() {
    this.dashboardService.getSearchHistory().subscribe((history: any) => {
      this.searches = history;
    });
  }

  dashboardSearch() {
    console.log('Searching for: ' + this.firstName + ':' + 'last: ' + this.lastName);
    if (this.firstName && this.lastName) {
      this.dashboardService.updateHistory(this.firstName, this.lastName, 'searched');
      this.dashboardService.dashboardServiceSearch(this.firstName, this.lastName)
        .subscribe(match => {
          if (match) {
            this.result = this.firstName + ' ' + this.lastName + ' is a valid name.';
          }
          if (!match) {
            this.result = this.firstName + ' ' + this.lastName + ' is a NOT valid name.';
          }
          console.log(match);
        });
    } else {
      this.result = 'Enter both a first and last name to search';
    }
    return false;
  }

  addNameToFirebase() {
    this.dashboardService.addName(this.firstName, this.lastName);
    this.dashboardService.updateHistory(this.firstName, this.lastName, 'added');
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
}
