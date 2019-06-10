import { Component } from '@angular/core';

@Component({
  selector: 'text',
  template: `
    <span><ng-content></ng-content></span>
  `
})
export class TextComponent {}
