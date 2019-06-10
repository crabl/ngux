import { Component, Input } from '@angular/core';
import { VerticalAlignment } from './alignment.enums';

@Component({
  selector: 'horizontal-stack',
  template: `
    <view class="horizontal-stack" [ngClass]="{
      'alignment--bottom': alignment === VerticalAlignment.Bottom,
      'alignment--center': alignment === VerticalAlignment.Center || !alignment,
      'alignment--top': alignment === VerticalAlignment.Top
    }">
      <ng-content></ng-content>
    </view>
  `,
  styles: [`
    .horizontal-stack {
      display: flex;
      flex: 1;
      flex-direction: row;
    }

    .alignment--bottom {
      align-items: flex-end;
    }

    .alignment--center {
      align-items: center;
    }

    .alignment--top {
      align-items: flex-start;
    }
  `]
})
export class HorizontalStackComponent {
  public VerticalAlignment = VerticalAlignment;
  @Input() alignment: VerticalAlignment;
}
