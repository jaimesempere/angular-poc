import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AppConfigService} from "./app-config.service";
import {HttpClientModule} from "@angular/common/http";
import {HomeModule} from "./pages/home/home.module";
import {HomeStrategyModule} from "./pages/home-strategy/home.module";
import {HomeFactoryModule} from "./pages/home-factory/home.module";

export function initializeApp(appConfig: AppConfigService) {
  return () => appConfig.loadConfig();
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule,
    HomeFactoryModule,
    HomeStrategyModule

  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [AppConfigService],
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
