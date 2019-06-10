import { Component } from '@angular/core';

@Component({
  selector: 'root',
  template: '<ng-content></ng-content>',
  styles: [`
    :host {
      display: flex;
      min-height: 100vh;
      min-width: 100vw;
      flex-direction: column;
    }
  `]
})
export class RootComponent {}
