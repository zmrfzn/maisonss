import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  SupportMailId = 'reachusatmaisonss@gmail.com';
  SupportPhone = '+91 93465 91525';
  constructor() { }

  ngOnInit() {
  }

}
