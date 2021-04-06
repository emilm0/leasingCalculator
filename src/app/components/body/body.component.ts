import { Component, OnInit } from '@angular/core';
import { trigger, state,transition, animate, style, query, stagger, animation, useAnimation, group, sequence } from '@angular/animations'
import { VEHICLES } from 'src/app/classes/vehiclesList';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  animations: [
    trigger('inOut', [
      transition('* => *',[
        sequence([
          animate(150, style({
            opacity: 0
          })),
          animate(500, style({
            opacity: 1
          }))
        ])
      ])
    ])
  ]
})
export class BodyComponent implements OnInit {

  counter = 0;
  change = false;
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
    this.change = !this.change;
    this.counter = this.checkItem(this.counter + 1);
  }
  prev(): void{
    this.change = !this.change;
    this.counter = this.checkItem(this.counter - 1);
  }

  constructor() {  }

  ngOnInit(): void {  }

}
