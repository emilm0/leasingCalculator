import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  value1 = 15;
  options1: Options = {
    floor: 0,
    ceil: 30,
    step: 5,
    showSelectionBar: true,
    showTicks: true,
    showTicksValues: true
  };

  value2 = 36;
  options2: Options = {
    floor: 24,
    ceil: 48,
    step: 12,
    showSelectionBar: true,
    showTicks: true,
    showTicksValues: true
  };

  constructor() { }

  ngOnInit(): void {
  }

}
