import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscriber } from 'rxjs';
import { Ejemplo } from './models/ejemplo/Ejemplo';
import * as MyActions from './actions/ejemplo/my-actions';
import * as fromRoot from './reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'app';
  showMenu: boolean = false;
  params: Observable<string>;
  ejemplos: Observable<Ejemplo[]>;
  buscadosEjemplos: Observable<boolean>;

  constructor(private store: Store<fromRoot.State>) {
    this.params = store.select(fromRoot.selectParams);
    this.ejemplos = store.select(fromRoot.selectEjemplos);
    this.buscadosEjemplos = store.select(fromRoot.selectBuscadosEjemplos);
  }

  ngOnInit(): void { }

  cargarEjemplos(params: string): void {
    this.store.dispatch(new MyActions.MyAction('myParams'));
  }

  toogleMenu() {
    this.showMenu = !this.showMenu;
  }

  openNav() {
    document.getElementById("myNav").style.height = "100%";
  }

  closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }

  private _opened: boolean = false;
  private _modeNum: number = 0;
  private _positionNum: number = 0;
  private _dock: boolean = false;
  private _closeOnClickOutside: boolean = true;
  private _closeOnClickBackdrop: boolean = false;
  private _showBackdrop: boolean = false;
  private _animate: boolean = true;
  private _trapFocus: boolean = true;
  private _autoFocus: boolean = false;
  private _keyClose: boolean = true;
  private _autoCollapseHeight: number = null;
  private _autoCollapseWidth: number = null;

  private _MODES: Array<string> = ['over', 'push', 'slide'];
  private _POSITIONS: Array<string> = ['left', 'right', 'top', 'bottom'];

  private _toggleOpened(): void {
    this._opened = !this._opened;
  }
}
