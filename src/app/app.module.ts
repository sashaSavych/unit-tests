import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PipePipe } from './pipe/pipe.pipe';
import { ComponentComponent } from './component/component.component';
import { DirectiveDirective } from './directive/directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    PipePipe,
    ComponentComponent,
    DirectiveDirective,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
