import { Component } from '@angular/core';
import { HorizontalAlignment, VerticalAlignment } from './alignment.enums';

@Component({
  selector: 'app-root',
  template: `
    <root>
      <vertical-stack [alignment]="HorizontalAlignment.Center">
      <text>Test</text> <spacer></spacer> <text>Test</text>
      </vertical-stack>
    </root>

    <!--<horizontal-stack><text>Test</text> <text>Test</text></horizontal-stack>

    <horizontal-stack>
      <text>Test</text>
      <spacer></spacer>
      <text>Test</text>
      <spacer></spacer>
    </horizontal-stack>-->
  `,
  styles: []
})
export class AppComponent {
  public HorizontalAlignment = HorizontalAlignment;
  public VerticalAlignment = VerticalAlignment;

  title = 'ngux';
}
