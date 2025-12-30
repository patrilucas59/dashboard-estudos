import { Component } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter, map, mergeMap } from 'rxjs';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, RouterLink],
  templateUrl: './header.html',
})
export class Header {
  pageTitle = '';

constructor(private router: Router, private route: ActivatedRoute) {
  this.router.events
    .pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.route.root),
      map(route => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }),
      mergeMap(route => route.data)
    )
    .subscribe(data => {
      this.pageTitle = data['title'] ?? '';
    });
}
}