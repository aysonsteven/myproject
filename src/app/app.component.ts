import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ResolveEnd, NavigationEnd, NavigationStart, RoutesRecognized } from '@angular/router';
import { filter } from 'minimatch';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'angularimpact';
  activeRoute = '';
  constructor(
    private route: ActivatedRoute, private router: Router
  ) {
  }
  ngOnInit(): void {
    this.router.events.subscribe( e => {
      if ( e instanceof RoutesRecognized ) {
        this.activeRoute = e.urlAfterRedirects;
      }
      console.log('eeee', this.activeRoute);
    });
    console.log('eeeeeee', this.activeRoute);

  }
}
