import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html'
})
export class ProjectsComponent implements OnInit {

  public href = '';
  constructor(private router: Router) { }

  ngOnInit() {
    this.href = this.router.url;
  }
}
