import { Component, Input } from '@angular/core';

export enum HorizontalAlignment {
  Leading = 'leading',
  Center = 'center',
  Trailing = 'trailing'
}

@Component({
  selector: 'vertical-stack',
  template: `
    <view class="vertical-stack" [ngClass]="{
      'alignment--leading': alignment === HorizontalAlignment.Leading,
      'alignment--center': alignment === HorizontalAlignment.Center || !alignment,
      'alignment--trailing': alignment === HorizontalAlignment.Trailing
    }">
      <ng-content></ng-content>
    </view>
  `,
  styles: [`
    .vertical-stack {
      display: flex;
      flex: 1;
      flex-direction: column;
    }

    .alignment--leading {
      align-items: flex-start;
    }

    .alignment--center {
      align-items: center;
    }

    .alignment--trailing {
      align-items: flex-end;
    }
  `]
})
export class VerticalStackComponent {
  public HorizontalAlignment = HorizontalAlignment;
  @Input() alignment: HorizontalAlignment;
}
