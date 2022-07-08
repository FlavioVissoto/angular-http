import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentsModule } from './components/components.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ComponentsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
