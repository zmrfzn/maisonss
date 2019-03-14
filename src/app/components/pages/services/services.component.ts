import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html'
})
export class ServicesComponent implements OnInit {

  public href = '';
  constructor(private router: Router) { }

  ngOnInit() {
    this.href = this.router.url;
  }

}
