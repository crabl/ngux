import { Component } from '@angular/core';

@Component({
  selector: 'view',
  template: `
    <ng-content></ng-content>
  `,
  styles: [`
    :host {
      display: flex;
      flex: 1;
    }
  `]
})
export class ViewComponent {}
