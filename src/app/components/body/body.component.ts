import { Component, OnInit } from '@angular/core';

export class Vehicle {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public img: string
  ){

  }
}

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  counter = 0;

  vehicles = [
    new Vehicle(1, 'C FORCE 520 EFI', 23900, 'assets/images/c-force-520-efi.jpg'),
    new Vehicle(2, 'C FORCE 550 EFI EPS', 28900, 'assets/images/c-force-550-efi-eps.jpg'),
    new Vehicle(3, 'C FORCE 820 EFI EPS', 39500, 'assets/images/c-force-800-efi-eps.jpg'),
    new Vehicle(4, 'C FORCE 850 EFI EPS', 44500, 'assets/images/c-force-850-efi-eps.jpg'),
    new Vehicle(5, 'C FORCE 1000 (CC)', 49900, 'assets/images/c-force-800-efi-eps.jpg')
  ];

  checkItem(i: number): number{
    if (i > this.vehicles.length){
      return 0;
    }
    else if (i < 0){
      return this.vehicles.length - 1;
    }
    else{
      return i - 1;
    }
  }

  next(): number{
    console.log(this.counter);
    return this.checkItem (this.counter + 1);
  }
  prev(): number{
    console.log(this.counter);
    return this.checkItem (this.counter - 1);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
