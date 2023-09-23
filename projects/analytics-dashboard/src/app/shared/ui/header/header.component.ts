import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  imagePath = '../assets/photo_2023-09-14_14-51-23.jpg';
  title = 'CoinMarketCap Subscription';
}
