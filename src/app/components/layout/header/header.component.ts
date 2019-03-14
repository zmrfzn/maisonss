import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  SupportMailId = 'support@maisonss.com';
  SupportPhone = '+91 012 3654 86';

  constructor() { }

  ngOnInit() {
  }

}
