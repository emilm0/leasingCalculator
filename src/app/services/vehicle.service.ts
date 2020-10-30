import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  private price = new Subject<number>();

  constructor() { }

  setPrice(value){
    this.price.next(value);
  }

  getPrice(): Observable<number>{
    return this.price.asObservable();
  }

}
