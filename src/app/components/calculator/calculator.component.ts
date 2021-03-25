import { Component, Input, OnInit } from '@angular/core';
import { LabelType, Options } from 'ng5-slider';
import { VEHICLES } from 'src/app/classes/vehiclesList';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  @Input() vehiclePrice = VEHICLES[0].price;

  value1 = 15;
  options1: Options = {
    floor: 0,
    ceil: 45,
    step: 5,
    showSelectionBar: true,
    showTicks: true,
    showTicksValues: true,
    translate: (value: number, label: LabelType): string => {
          return value + '%';
    }
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

  value3 = 10;
  options3: Options = {
    floor: 0,
    ceil: 30,
    step: 5,
    showSelectionBar: true,
    showTicks: true,
    showTicksValues: true,
    translate: (value: number, label: LabelType): string => {
      return value + '%';
  }
  };

  initialPaymant(): number{
    return this.vehiclePrice * this.value1/100;
  }

  installment(): number{
    return this.leasingPeriod(this.value2);
  }

  redemption(): number{
    return this.vehiclePrice * this.value3/100;
  }

  leasingPeriod(months: number): number{
    switch (months) {
      case 24:
        return this.calculate(1.0315, 0.06);
      case 36:
        return this.calculate(1.0469, 0.09);
      case 48:
        return this.calculate(1.0624, 0.12);
    }
  }

  calculate(regularInterest:number, redemptionInterest:number): number{
    // price value without initial paymant and redemption
    const basicLeasing = this.vehiclePrice - this.initialPaymant() -this.redemption();

    return ((basicLeasing * regularInterest) + (this.redemption() * redemptionInterest)) / this.value2;
    
  }

  constructor() {  }

  ngOnInit(): void {
    
  }

}
