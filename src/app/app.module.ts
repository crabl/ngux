import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ViewComponent } from './view.component';
import { HorizontalStackComponent } from './horizontal-stack.component';
import { VerticalStackComponent } from './vertical-stack.component';
import { SpacerComponent } from './spacer.component';
import { TextComponent } from './text.component';
import { RootComponent } from './root.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    HorizontalStackComponent,
    VerticalStackComponent,
    SpacerComponent,
    TextComponent,
    RootComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
