import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  contacts = [ {
    name: 'Rajat',
    phone: 8003650500
  }, {
    name: 'Amit',
    phone: 7065502855
  }, {
    name: 'Nitish',
    phone: 9413686335
  }, {
    name: 'Nitin',
    phone: 8505019814
  }, {
    name: 'Gaurav',
    phone: 8387082049
  }];
  search;
  constructor() { }

  ngOnInit() {
  }

}
