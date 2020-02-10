import { Component, OnInit } from '@angular/core';

interface Date {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {

  date: Date;

  constructor() { }

  ngOnInit() {
    const time = setInterval(() => {
      const distance = this.regresiva();
      if (distance <= 0) {
        clearInterval(time);
      }
    }, 1000);
  }

  regresiva() {
    const countDownDate = new Date('Mar 1, 2020 16:00:00').getTime();
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const days = this.formatDate(Math.floor(distance / (1000 * 60 * 60 * 24)));
    const hours = this.formatDate(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const minutes = this.formatDate(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
    const seconds = this.formatDate(Math.floor((distance % (1000 * 60)) / 1000));
    this.date = { days, hours, minutes, seconds };
    return distance;
  }

  formatDate(date) {
    if (date < 10) {
      return `0${date.toString()}`;
    } else {
      return date;
    }
  }

}
