import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {

  public href = '';
  constructor(private router: Router) { }

  ngOnInit() {
    this.href = this.router.url;
  }

}
