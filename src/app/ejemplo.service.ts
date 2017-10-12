import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { Ejemplo } from './models/Ejemplo';

@Injectable()
export class EjemploService {

  constructor() { }

  getEjemploSlowly(params): Observable<Ejemplo[]> {
    return new Observable<Ejemplo[]>((observer: Subscriber<Ejemplo[]>) => {
      let ejemplos: Ejemplo[] = [];
      ejemplos.push(new Ejemplo('Un ejemplo'));
      ejemplos.push(new Ejemplo('Otro ejemplo'));
      //3 second interval
      setTimeout(() => observer.next(ejemplos), 3000);
    });
  }
}
