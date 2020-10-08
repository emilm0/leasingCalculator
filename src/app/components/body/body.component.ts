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

  vehicles = [
    new Vehicle(1, 'C FORCE 520 EFI', 23900, 'assets/images/c-force-520-efi.jpg'),
    new Vehicle(2, 'C FORCE 550 EFI EPS', 28900, 'assets/images/c-force-550-efi-eps.jpg'),
    new Vehicle(3, 'C FORCE 820 EFI EPS', 39500, 'assets/images/c-force-800-efi-eps.jpg'),
    new Vehicle(4, 'C FORCE 850 EFI EPS', 44500, 'assets/images/c-force-850-efi-eps.jpg'),
    new Vehicle(5, 'C FORCE 1000 (CC)', 49900, 'assets/images/c-force-800-efi-eps.jpg')    
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
