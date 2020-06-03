import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestxComponent } from './testx/testx.component';
import { TestyComponent } from './testy/testy.component';
import { ComponentxyComponent } from './testx/componentxy/componentxy.component';

@NgModule({
  declarations: [
    AppComponent,
    TestxComponent,
    TestyComponent,
    ComponentxyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
