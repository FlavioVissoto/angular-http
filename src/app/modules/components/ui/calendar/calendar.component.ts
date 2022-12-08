import { Component, EventEmitter, OnInit } from '@angular/core';

import { CalendarRequest } from '../../../../interfaces/components/ui/calendar.request';
import { Day } from '../../../../components/calendar/interfaces/day.calendar.interface';
import { Month } from './../../../../components/calendar/interfaces/month.calendar.interface';
import { NotificationCalendar } from '../../../../components/calendar/interfaces/notification.calendar.interface';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  date = new Date();
  currentDay = this.date.getDate();
  currentDayWeek = this.date.getDay();
  currentYear = this.date.getFullYear();
  currentMonth = this.date.getMonth();

  events: EventEmitter<NotificationCalendar[]> = new EventEmitter<NotificationCalendar[]>();
  daysEvent: NotificationCalendar[] = [];

  valuesPage: CalendarRequest = {} as CalendarRequest;

  ngOnInit(): void {
    this.notifications();

    // setInterval(() => {
    //   this.notifications();
    //   this.events.emit(this.daysEvent);
    // }, 60000);
  }

  clickPlus(): void {
    console.log('clickPlus');
  }

  clickDate(item: Day): void {
    console.log('clickDate ' + JSON.stringify(item));
  }

  clickMonth(): void {
    console.log('clickMonth');
  }

  clickYear(): void {
    console.log('clickYear');
  }

  changeMonth(item: Month): void {
    console.log('changeMonth ' + JSON.stringify(item));
  }

  changeYear(item: number): void {
    console.log('changeMonth ' + JSON.stringify(item));
  }

  private generateNotificationCalendar(): NotificationCalendar {
    const numbernotifi = Math.floor(Math.random() * 10) <= 3;
    return {
      day: Math.floor(Math.random() * this.getLastDateOfMonth()),
      month: this.currentMonth,
      year: this.currentYear,
      countNotifications: numbernotifi ? Math.floor(Math.random() * 99).toString() : undefined,
    };
  }

  private getLastDateOfMonth(): number {
    return 32 - new Date(this.currentYear, this.currentMonth, 32).getDate();
  }

  private notifications(): void {
    this.daysEvent = [];
    for (let i = 0; i < 15; i++) {
      let eventValid = false;
      let notification: NotificationCalendar = {} as NotificationCalendar;

      while (!eventValid) {
        notification = this.generateNotificationCalendar();
        eventValid =
          this.daysEvent.findIndex((x) => x.day == notification.day && x.month == notification.month && x.year == notification.year) == -1;
      }
      this.daysEvent.push(notification);
    }
  }
}
