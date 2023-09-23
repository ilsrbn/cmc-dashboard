import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IAnalytics } from '../../utils/interfaces';

@Component({
  selector: 'home-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatisticsComponent {
  @Input() analytics!: IAnalytics
}
