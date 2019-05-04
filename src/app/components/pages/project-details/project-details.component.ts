import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import JsonData from './../../../../assets/projects.json';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {

  public href = '';
  public project: any;
  public projectId = 0;
  public projectName = '';
  public projectImage = 'assets/img/project-details.jpg';
  private readonly Json = JsonData;

  public desingName = '';
  public designDetails = '';

  constructor(private router: Router, private readonly route: ActivatedRoute) { }

  ngOnInit() {
    this.href = this.router.url;

    // No Subscription
    this.projectId = parseInt(this.route.snapshot.paramMap.get('ProjectId'), 10);

    // Subscribed
    this.route.paramMap.subscribe(params => {
      this.projectId = parseInt(params.get('ProjectId'), 10);
    });

    if (this.projectId !== undefined || this.projectId !== null || this.projectId !== 0) {
      this.project = this.Json.Projects.find(item => item.Id === this.projectId);

      if (this.project !== undefined) {
        this.projectName = this.project.ProjectName;
        this.desingName = this.project.DesignName;
        this.designDetails = this.project.DesignSpecs;
        this.projectImage = this.project.ImageUrl;
      } else {
        // add 404 page
      }

    }
  }


}
