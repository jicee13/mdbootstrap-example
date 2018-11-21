import { BrowserModule } from '@angular/platform-browser';
import { BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import * as Hammer from "hammerjs";

import { AppRoutingModule } from './app-routing.module';


export class MyHammerConfig extends HammerGestureConfig {
  overrides = <any> {
    'pan': { direction: Hammer.DIRECTION_ALL },
    'swipe': { direction: Hammer.DIRECTION_VERTICAL },
  };

  buildHammer(element: HTMLElement) {
    const mc = new Hammer(element, {
      touchAction: 'auto',
          inputClass: Hammer.TouchInput,
          recognizers: [
            [Hammer.Swipe, {
              direction: Hammer.DIRECTION_HORIZONTAL
            }]
          ]
    });
    return mc;
  }
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    BrowserTransferStateModule
  ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
