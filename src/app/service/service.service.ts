import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

  sum(a: number, b: number): number {
    return a + b;
  }

  sumAsync(a: number, b: number): Promise<number> {
    return new Promise<number>(resolve => {
      setTimeout(() => {
        resolve(a + b);
      }, 3000);
    });
  }
}
