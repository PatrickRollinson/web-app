import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Humanitarian Making';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToProjects() {
    this.router.navigateByUrl('projects');
  }

  goToReadiness() {
    this.router.navigateByUrl('pages/readiness-levels');
  }

}
