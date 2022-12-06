import { Component, OnInit } from '@angular/core';

import { Day } from './interfaces/day.calendar.interface';
import { Month } from './interfaces/month.calendar.interface';
import { Week } from './interfaces/week.calendar.interface';

@Component({
  selector: 'app-calendar-test',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  date = new Date();
  currentDay = this.date.getDate();
  currentDayWeek = this.date.getDay();
  currentYear = this.date.getFullYear();
  currentMonth = this.date.getMonth();
  currentHours: string = this.getHours();

  renderDates: Day[] = [];

  months = [
    {
      index: 0,
      name: 'Janeiro',
      disabled: false,
      selected: false,
    },
    {
      index: 1,
      name: 'Fevereiro',
      disabled: true,
      selected: false,
    },
    {
      index: 2,
      name: 'Março',
      disabled: false,
      selected: false,
    },
    {
      index: 3,
      name: 'Abril',
      disabled: false,
      selected: false,
    },
    {
      index: 4,
      name: 'Maio',
      disabled: false,
      selected: false,
    },
    {
      index: 5,
      name: 'Junho',
      disabled: false,
      selected: false,
    },
    {
      index: 6,
      name: 'Julho',
      disabled: false,
      selected: false,
    },
    {
      index: 7,
      name: 'Agosto',
      disabled: false,
      selected: false,
    },
    {
      index: 8,
      name: 'Setembro',
      disabled: false,
      selected: false,
    },
    {
      index: 9,
      name: 'Outubro',
      disabled: false,
      selected: false,
    },
    {
      index: 10,
      name: 'Novembro',
      disabled: false,
      selected: false,
    },
    {
      index: 11,
      name: 'Dezembro',
      disabled: false,
      selected: false,
    },
  ] as Month[];

  daysWeek: Week[] = [
    {
      index: 0,
      name: 'Domingo',
      shortname: 'Dom',
    },
    {
      index: 1,
      name: 'Segunda-Feira',
      shortname: 'Seg',
    },
    {
      index: 2,
      name: 'Terça-Feira',
      shortname: 'Ter',
    },
    {
      index: 3,
      name: 'Quarta-Feira',
      shortname: 'Qua',
    },
    {
      index: 4,
      name: 'Quinta-Feira',
      shortname: 'Qui',
    },
    {
      index: 5,
      name: 'Sexta-Feira',
      shortname: 'Sex',
    },
    {
      index: 6,
      name: 'Sábado',
      shortname: 'Sáb',
    },
  ];
  yearList: number[] = [];

  showSelectDays = true;
  showSelectMonth = false;
  showSelectYear = false;

  ngOnInit(): void {
    this.renderCalendar();
    this.setHours();
    this.setYearsAvailables();
  }

  /**
   * Retorna o dia da semana inicial do mês.
   * @param year Ano
   * @param month Mês
   * @returns Retorna o dia da semana
   */
  getFirstDayofMonth(year: number, month: number): number {
    return new Date(year, month, 1).getDay();
  }

  /**
   * Retorna o último dia da semana do mês.
   * @param year Ano
   * @param month Mês
   * @returns Retorna o dia da semana
   */
  getLastDateOfMonth(year: number, month: number): number {
    return 32 - new Date(year, month, 32).getDate();
  }

  /**
   * Retorna a quantidade de dias existentes no mês.
   * @param year Ano
   * @param month Mês
   * @returns Retorna a quantidade de dias no mês
   */
  getDaysInMonth(year: number, month: number): number {
    return 32 - new Date(year, month, 32).getDate();
  }

  /**
   * Retorna o último dia do mês.
   * @param year Ano
   * @param month Mês
   * @returns Retorna o último dia do Mês
   */
  getLastDayOfMonth(year: number, month: number): number {
    return new Date(year, month, this.getLastDateOfMonth(year, month)).getDay();
  }

  /**
   * Abre a seleção do mês.
   */
  openSelectMonth(): void {
    this.showSelectMonth = true;
    this.showSelectDays = false;
    this.showSelectYear = false;
  }

  /**
   * Abre a seleção do ano.
   */
  openSelectYear(): void {
    this.showSelectMonth = false;
    this.showSelectDays = false;
    this.showSelectYear = true;
  }

  /**
   * Mostra o calendario e esconde a seleção de mês e ano.
   */
  showCalendar(): void {
    this.showSelectMonth = false;
    this.showSelectYear = false;
    this.showSelectDays = true;
  }

  /**
   * Seleciona o dia.
   * @param item Dia selecionado
   */
  selectDate(item: Day): void {
    for (let i = 0; i < this.renderDates.length; i++) {
      if (this.renderDates[i].cssClass.indexOf('selected') > 0 && this.renderDates[i].month === this.currentMonth) {
        this.renderDates[i].cssClass = this.renderDates[i].cssClass.replace('selected', '');
      }
    }
    const index = this.renderDates.findIndex((x) => x.day == item.day && x.month == item.month);
    this.renderDates[index].cssClass += ' selected';
  }

  /**
   * Altera a seleção do dia.
   * @param item Dia selecionado
   */
  changeMonth(item: Day): void {
    this.currentDay = item.day;
    this.currentMonth = item.month;
    this.currentYear = item.year;
    this.setDayWeek();
    this.renderCalendar();
    this.selectDate(item);
  }

  /**
   * Altera a seleção do mês.
   * @param item Mês selecioando
   */
  selectedMonth(item: Month): void {
    this.currentMonth = item.index;
    this.setDayWeek();
    this.showCalendar();
    this.renderCalendar();
  }

  /**
   * Altera a seleção do ano.
   * @param item Ano selecioando
   */
  selectedYear(year: number): void {
    this.currentYear = year;
    this.setDayWeek();
    this.showCalendar();
    this.renderCalendar();
  }

  /**
   * Atribui o dia da semana na variavel "currentDayWeek".
   */
  private setDayWeek(): void {
    this.currentDayWeek = new Date(this.currentYear, this.currentMonth, this.currentDay).getDay();
  }

  /**
   * Renderiza o calendário.
   */
  private renderCalendar(): void {
    const firstDayofMonth = this.getFirstDayofMonth(this.currentYear, this.currentMonth);
    const lastDateOfMonth = this.getLastDateOfMonth(this.currentYear, this.currentMonth);
    const lastDayOfMonth = this.getLastDayOfMonth(this.currentYear, this.currentMonth);
    const lastDateOfPreviousMonth = this.getLastDateOfMonth(this.currentYear, this.currentMonth - 1);

    this.renderDates = [];

    for (let i = firstDayofMonth; i > 0; i--) {
      this.renderDates.push({
        text: (lastDateOfPreviousMonth - i + 1).toString(),
        cssClass: 'prev',
        month: this.currentMonth > 0 ? this.currentMonth - 1 : 11,
        prev: true,
        year: this.currentMonth > 0 ? this.currentYear : this.currentYear - 1,
        day: lastDateOfPreviousMonth - i + 1,
      });
    }

    for (let i = 1; i <= lastDateOfMonth; i++) {
      const isToday =
        i === this.date.getDate() && this.currentMonth === new Date().getMonth() && this.currentYear === new Date().getFullYear()
          ? 'today'
          : '';
      //const isToday = i === this.date.getDate() ? 'active' : '';
      this.renderDates.push({
        text: i.toString(),
        cssClass: isToday,
        month: this.currentMonth,
        year: this.currentYear,
        day: i,
      });
    }

    for (let i = lastDayOfMonth; i < 6; i++) {
      this.renderDates.push({
        text: (i - lastDayOfMonth + 1).toString(),
        cssClass: 'next',
        month: this.currentMonth < 11 ? this.currentMonth + 1 : 0,
        next: true,
        year: this.currentMonth < 11 ? this.currentYear : this.currentYear + 1,
        day: i - lastDayOfMonth + 1,
      });
    }
  }

  /**
   * Atualiza a hora/minuto a cada 1 segundo.
   */
  private setHours(): void {
    setInterval(() => {
      this.currentHours = this.getHours();
    }, 1000);
  }

  /**
   *
   * @returns Retorna a hora e minuto atual.
   */
  private getHours(): string {
    const dateNow = new Date();
    return `${dateNow.getHours()}:${dateNow.getMinutes().toString().padStart(2, '0')}`;
  }

  /**
   * Cria a lista dos anos disponíveis para seleção.
   */
  private setYearsAvailables(): void {
    const yearStart = 2021;

    for (let i = 0; i < 6; i++) {
      this.yearList.push(yearStart + i);
    }
  }
}
