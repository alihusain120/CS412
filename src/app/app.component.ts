import { Component, OnInit } from '@angular/core';
import {rates} from './data/EXRateMOCK';
import {EXRate} from './data/EXRate';
import {Country} from './data/Country';
import {AlphavantageService} from './alphavantage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  rates: EXRate[] = rates;
  dailyExRate: EXRate;
  selectedDayRate: string;
  country: string;
  countryExRate: string;
  timeOfRate: string;

  constructor(private AVService: AlphavantageService) { }

  ngOnInit(): void {
  }

  getExRate(ex: EXRate): void {
    this.selectedDayRate = ex.EURUSD;
  }

  //Tried best, can't get it going.
  //No linter, I will not put space at beginning of comment.

  getCountry(): void {
    if (this.country === 'Japan'){
      this.AVService.getUSDtoYen().subscribe(
        response => {
          this.countryExRate = response['Realtime Currency Exchange Rate']['5. Exchange Rate'];
          this.timeOfRate = response['Realtime Currency Exchange Rate']['6. Last Refreshed'];
        }
      );
    } else {
      this.AVService.getUSDtoGBP().subscribe(
        response => {
          this.countryExRate = response['Realtime Currency Exchange Rate']['5. Exchange Rate'];
          this.timeOfRate = response['Realtime Currency Exchange Rate']['6. Last Refreshed'];
        }
      );
    }
  }
}

// console.log(`Date: ${this.dailyExRate.date}`);
// console.log(`EURUSD: ${this.dailyExRate.EURUSD}`);
