import { Component, Renderer2, OnInit } from '@angular/core';

interface Date {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  distance: number;
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
    // const time = setInterval(() => {
    //   const cuenta = this.regresiva();
    //   if (cuenta.distance > 0) {
    //     this.date = cuenta;
    //   } else {
    //     clearInterval(time);
    //     console.log('terminó');
    //   }
    //   console.log(this.date);
    // }, 1000)

    
  }

  regresiva() {
    const countDownDate = new Date("Jan 31, 2020 14:17:00").getTime();
    const now = new Date().getTime()
    const distance = countDownDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds, distance };
  }

}
