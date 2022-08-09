import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentsModule } from './components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpRequestClientServices } from '@vissoto-angular-toolkit/http-client';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ComponentsModule, HttpClientModule],
  providers: [HttpRequestClientServices],
  schemas: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
