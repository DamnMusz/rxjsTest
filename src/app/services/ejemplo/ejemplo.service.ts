import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { Ejemplo } from '../../models/ejemplo/Ejemplo';

@Injectable()
export class EjemploService {

  constructor() { }

  getEjemploSlowly(params): Observable<Ejemplo[]> {
    return new Observable<Ejemplo[]>((observer: Subscriber<Ejemplo[]>) => {
      let ejemplos: Ejemplo[] = [];
      ejemplos.push(new Ejemplo('Un ejemplo'));
      ejemplos.push(new Ejemplo('Otro ejemplo'));
      console.log("Cargando ejemplos: " + ejemplos);
      //2 second interval
      setTimeout(() => observer.next(ejemplos), 2000);
    });
  }
}
