import { Component, OnInit } from '@angular/core';
import {rates} from './data/EXRateMOCK';
import {EXRate} from './data/EXRate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  rates: EXRate[] = rates;
  dailyExRate: EXRate;
  selectedDayRate: string;

  constructor() { }

  ngOnInit(): void {
  }

  getExRate(ex: EXRate): void {
    this.selectedDayRate = ex.EURUSD;
  }
}

// console.log(`Date: ${this.dailyExRate.date}`);
// console.log(`EURUSD: ${this.dailyExRate.EURUSD}`);
