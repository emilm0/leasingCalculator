import { Component, OnInit } from '@angular/core';
import { trigger, state,transition, animate, style, query, stagger } from '@angular/animations'
 import { VEHICLES } from 'src/app/classes/vehiclesList';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  animations: [
    trigger('pageAnimations', [
      transition(':enter', [
        query('.hero, form', [
          style({opacity: 0, transform: 'translateY(-100px)'}),
          stagger(-30, [
            animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'none' }))
          ])
        ])
      ])
    ]),
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
