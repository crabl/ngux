import { Component } from '@angular/core';
import { HorizontalAlignment } from './vertical-stack.component';

@Component({
  selector: 'app-root',
  template: `
    <vertical-stack [alignment]="HorizontalAlignment.Leading"><view>Test</view> <view>Test</view></vertical-stack>

    <horizontal-stack><div>Test</div> <div>Test</div></horizontal-stack>
  `,
  styles: []
})
export class AppComponent {
  public HorizontalAlignment = HorizontalAlignment;
  title = 'ngux';
}
