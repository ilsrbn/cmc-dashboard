import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-spacer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span style={{style[direction]}}></span>
  `,
  styles: [`
    span {
      display: block;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpacerComponent {
  @Input() direction: 'vertical' | 'horizontal' = 'horizontal'
  @Input() size: number = 1

  get style() {
    return {
      vertical: `width: ${this.size}rem; height: 100%;`,
      horizontal: `height: ${this.size}rem; width: 100%;`
    }
  }
}
