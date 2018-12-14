import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appDirective]'
})
export class DirectiveDirective {
  private _counter = 0;

  @Output() changes = new EventEmitter<number>();

  @HostListener('click') onClick() {
    this._counter ++;
    this.changes.emit(this._counter);
  }
}
