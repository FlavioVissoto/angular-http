import {
  CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA,
  NgModule,
} from '@angular/core';
import { CardModule, TooltipModule } from '@vissoto-angular-toolkit/ui';

import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeCardsComponent } from './home-cards/home-cards.component';

@NgModule({
  declarations: [HomeComponent, HomeCardsComponent],
  imports: [CommonModule, HomeRoutingModule, TooltipModule, CardModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class HomeModule {}
