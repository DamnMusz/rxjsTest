import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  constructor() { }

  ngOnInit(): void { }

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

  private _opened2: boolean = false;
  private _modeNum2: number = 0;
  private _positionNum2: number = 2;
  private _dock2: boolean = false;
  private _closeOnClickOutside2: boolean = true;
  private _closeOnClickBackdrop2: boolean = false;
  private _showBackdrop2: boolean = false;
  private _animate2: boolean = true;
  private _trapFocus2: boolean = true;
  private _autoFocus2: boolean = false;
  private _keyClose2: boolean = true;
  private _autoCollapseHeight2: number = null;
  private _autoCollapseWidth2: number = null;

  private _MODES2: Array<string> = ['over', 'push', 'slide'];
  private _POSITIONS2: Array<string> = ['left', 'right', 'top', 'bottom'];

  private _toggleOpened2(): void {
    this._opened2 = !this._opened2;
  }

  private _opened3: boolean = false;
  private _toggleOpened3(): void {
    this._opened3 = !this._opened3;
  }
}
