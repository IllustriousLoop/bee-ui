import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'bee-ui';
  hidden = false;
  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    if (this.location.isCurrentPathEqualTo('/admin')) this.hidden = true;
    if (this.location.isCurrentPathEqualTo('/ordinary')) this.hidden = true;
  }
}
