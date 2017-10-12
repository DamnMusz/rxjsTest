import { Component, OnInit, Input } from '@angular/core';
import { Ejemplo } from '../../models/ejemplo/Ejemplo'

@Component({
  selector: 'app-ejemplo',
  templateUrl: './ejemplo.component.html',
  styleUrls: ['./ejemplo.component.css']
})
export class EjemploComponent implements OnInit {
  @Input() params: string;
  @Input() buscadosEjemplos: boolean;
  @Input() ejemplos: Ejemplo[];

  constructor() { }

  ngOnInit() { }

}
