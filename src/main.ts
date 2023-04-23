import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { ObservableComponent } from './observable/observable.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, ObservableComponent],
  template: `
    <isma-observable></isma-observable>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
