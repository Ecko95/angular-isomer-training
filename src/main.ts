import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { ObservableComponent } from './observable/observable.component';
import { DataService } from './data.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, ObservableComponent, HttpClientModule],
  template: `
    <isma-observable></isma-observable>
  `,
  providers: [DataService, JsonPipe],
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
