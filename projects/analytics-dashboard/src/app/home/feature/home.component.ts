import { Component } from '@angular/core';
import { map } from 'rxjs';

import { HomeService } from '../data-access/home.service';

import { descendingSortBy } from '../../shared/sort';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  analytics$ = this.homeService.getAnalytics();

  listings$ = this.analytics$.pipe(
    map((analytics) =>
      descendingSortBy(analytics.listings.data, 'subscriptions')
    )
  );

  constructor(private readonly homeService: HomeService) { }
}
