import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-call-info',
  templateUrl: './call-info.component.html',
  styleUrls: ['./call-info.component.scss']
})
export class CallInfoComponent implements OnInit {

  constructor(private router: Router) { }
  public href = '';
  public SectionClass = '';
  ngOnInit() {

    if (this.router.url === '/services') {
      this.SectionClass = 'section-gap';
    } else {
      this.SectionClass = 'pt-120';
    }
  }

}
