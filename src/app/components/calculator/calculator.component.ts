import { Component, OnInit } from '@angular/core';
import { LabelType, Options } from 'ng5-slider';
import { VEHICLES } from 'src/app/classes/vehiclesList';
import { VehicleService } from 'src/app/services/vehicle.service';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  vehiclePrice = VEHICLES[0].price;

  value1 = 15;
  options1: Options = {
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

  value2 = 36;
  options2: Options = {
    floor: 24,
    ceil: 48,
    step: 12,
    showSelectionBar: true,
    showTicks: true,
    showTicksValues: true
  };

  initialPaymant(){
    return this.vehiclePrice * this.value1/100;
  }
  installment(){
    return (this.vehiclePrice - this.initialPaymant()) / this.value2;
  }


  constructor(private vehicleService: VehicleService) {  }

  ngOnInit(): void {
   this.vehicleService.getPrice().subscribe(newPrice =>{
     this.vehiclePrice = newPrice;
   });
  }

}
