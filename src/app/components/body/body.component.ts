import { Component, OnInit } from '@angular/core';
import { trigger, state,transition, animate, style } from '@angular/animations'
 import { VEHICLES } from 'src/app/classes/vehiclesList';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  animations: [

    trigger('slideInOut', [
      state('enter', style({
        height: '0',
        overflow: 'hidden',
        opacity: '0',
        visibility: 'hidden'
      })),
      state('leave', style({
        overflow: 'hidden'
      })),
      transition('enter<=>leave', animate(500))
    ])
  ]
  //   trigger('slideInOut', [
  //     transition(':enter', [
  //       style({transform: 'translateY(-100%)'}),
  //       animate('200ms ease-in', style({transform: 'translateY(0%)'}))
  //     ]),
  //     transition(':leave', [
  //       animate('200ms ease-in', style({transform: 'translateY(-100%)'}))
  //     ])
  //   ])
  // ]
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
