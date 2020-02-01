import { Component, Renderer2, OnInit } from '@angular/core';

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
        console.log('terminó');
      }
    }, 1000);


  }

  regresiva() {
    const countDownDate = new Date("Mar 1, 2020 16:00:00").getTime();
    const now = new Date().getTime()
    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    this.date = { days, hours, minutes, seconds };
    return distance;
  }

}
