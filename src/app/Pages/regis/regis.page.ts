import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-regis',
  templateUrl: './regis.page.html',
  styleUrls: ['./regis.page.scss'],
})
export class RegisPage implements OnInit {
  myProperty!: string;

  constructor() { }

  ngOnInit() {
    this.initializeData();
  }

  initializeData() {
    this.myProperty = '';
  }
}
