import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  public href = '';
  public SectionClass = '';
  constructor(private router: Router) { }

  ngOnInit() {
    this.href = 'project-info';

    if (this.router.url === '/projects')  {
      this.SectionClass = 'section-gap';
    } else {
      this.SectionClass = 'pb-120';
    }
  }

}
