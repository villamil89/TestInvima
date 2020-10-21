import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
import { ServiceModule } from './infraestructure/services/service.module';
import { UIModule } from './ui/components/ui.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    UIModule,
    BrowserModule,
    AppRoutes,
    HttpClientModule,
    ServiceModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}