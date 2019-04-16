import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FieldComponent } from './field/field.component';

@NgModule({
  declarations: [AppComponent, FieldComponent],
  entryComponents: [FieldComponent],
  imports: [BrowserModule, FormsModule],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {
  constructor(private injector: Injector) {
    const complexCustomComponent = createCustomElement(FieldComponent, { injector: this.injector });
    customElements.define('my-custom-web-field', complexCustomComponent);
  }
}
