import { Component, OnInit } from '@angular/core';
import { filter, map, Observable, reduce, Subject } from 'rxjs';
@Component({
  standalone: true,
  selector: 'isma-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css'],
})
export class ObservableComponent implements OnInit {
  constructor() {}

  private buttonClickSubject = new Subject<any>();
  public buttonClick$: Observable<any> = this.buttonClickSubject.asObservable();
  public counter: number = 0;

  ngOnInit() {
    // subscribe to the observable and log the emitted values
    this.buttonClick$.subscribe((value) => {
      // console.log(value);
    });
    // MAP
    this.buttonClick$
      .pipe(map((value) => `${value} mapped!`))
      .subscribe((value) => {
        console.log(value);
      });
    // FILTER
    this.buttonClick$.pipe(filter((value) => value < 3)).subscribe((value) => {
      console.log(`${value} filtered!`);
    });
  }

  handleClick(): void {
    this.counter++;
    this.buttonClickSubject.next(this.counter);
  }
}
