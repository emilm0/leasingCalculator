import { Component, OnInit } from '@angular/core';
<<<<<<< Updated upstream
=======
import { trigger, state,transition, animate, style, query, stagger, animation, useAnimation, group } from '@angular/animations'
>>>>>>> Stashed changes
 import { VEHICLES } from 'src/app/classes/vehiclesList';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  animations: [
    trigger('inOut', [
      transition('* => *', [
        group([
          animate(100, style({
            opacity: 0.1
          })),
          animate(200, style({
            opacity: 1
          }))
        ])
      ])
    ])
  ]
})
export class BodyComponent implements OnInit {

  counter = 0;

  vehicles = VEHICLES;

  checkItem(i: number): number{
    if (i >= this.vehicles.length){
      return 0;
    }
    else if (i < 0){
      return this.vehicles.length - 1;
    }
    else{
      return i;
    }
  }

  next(): void{
    this.counter = this.checkItem(this.counter + 1);
  }
  prev(): void{
    this.counter = this.checkItem(this.counter - 1);
  }

  constructor() {  }

  ngOnInit(): void {  }

}
