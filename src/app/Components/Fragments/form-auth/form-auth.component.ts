import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-auth',
  templateUrl: './form-auth.component.html',
  styleUrls: ['./form-auth.component.scss'],
})
export class FormAuthComponent  implements OnInit {
  und!: string
  constructor() { }

  ngOnInit() {
    this.und = '';
  }

}
