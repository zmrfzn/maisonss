import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {

  public href = '';
  constructor(private router: Router) { }

  ngOnInit() {
    this.href = this.router.url;
  }

  onFormSubmit(e) {
    e.preventDefault();
  }


}
