import { Component } from '@angular/core';
import { Event, Navigation, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from "@angular/router";
import { LoadingBarService } from "@ngx-loading-bar/core";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_Tp_crude';
  loader = this.loadingBar.useRef();

  constructor(private loadingBar: LoadingBarService, private router: Router) {
    this.router.events.subscribe(
      (event: Event) => {
        this.navigationInterceptor(event);
      });

  }
  private navigationInterceptor(event: Event): void {
    if (event instanceof NavigationStart) {
      this.loader.start();
    }
    else if (event instanceof NavigationEnd) {
      this.loader.complete();
    }
    else if (event instanceof NavigationCancel) {
      this.loader.complete();
    }
    else if (event instanceof NavigationError) {
      this.loader.stop();
    }
  }
}
