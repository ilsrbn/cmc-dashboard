import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-statistics-card',
  templateUrl: './statistics-card.component.html',
  styleUrls: ['./statistics-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatisticsCardComponent {
  @Input() title!: string
  @Input() total!: number
  @Input() active?: number

  get hasStats() {
    return !!this.active
  }

  get nonActive() {
    return this.total - this.active!
  }

  get activePercent() {
    const percent = this.active! * 100 / this.total!
    return percent.toFixed(2)
  }

  get nonActivePercent() {
    return 100 - +this.activePercent
  }
}
