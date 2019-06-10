import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ViewComponent } from './view.component';
import { HorizontalStackComponent } from './horizontal-stack.component';
import { VerticalStackComponent } from './vertical-stack.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    HorizontalStackComponent,
    VerticalStackComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
