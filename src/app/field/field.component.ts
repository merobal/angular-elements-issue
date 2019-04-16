import { Component, forwardRef, Output, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FieldComponent),
      multi: true,
    },
  ],
})
export class FieldComponent implements ControlValueAccessor {
  @Output()
  fooChange = new EventEmitter<string>();

  private _value: string;
  set value(payload: string) {
    if (payload !== this._value) {
      this._value = payload;
      this.onChange(payload);
      this.fooChange.emit(payload);
      this.onTouched();
    }
  }
  get value() {
    return this._value;
  }

  onChange = (_: string) => {};
  onTouched = () => {};

  writeValue(payload: string): void {
    this.value = payload;
  }

  registerOnChange(fn: (_: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
}
