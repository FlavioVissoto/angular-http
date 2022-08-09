import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CardAlfaModule, TooltipModule } from '@vissoto-angular-toolkit/ui';
import { CommonModule, DatePipe } from '@angular/common';

import { HomeCardsComponent } from './home-cards/home-cards.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [HomeComponent, HomeCardsComponent],
  providers: [DatePipe],
  imports: [CommonModule, HomeRoutingModule, TooltipModule, CardAlfaModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class HomeModule {}
