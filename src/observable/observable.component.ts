import { CommonModule, JsonPipe } from '@angular/common';
import { Component, OnInit, Pipe } from '@angular/core';
import { filter, map, Observable, reduce, Subject } from 'rxjs';
import { Post } from '../post';
import { DataService } from '../data.service';
@Component({
  standalone: true,
  imports: [CommonModule, JsonPipe],
  selector: 'isma-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css'],
})
export class ObservableComponent implements OnInit {
  constructor(private dataService: DataService) {}

  private buttonClickSubject = new Subject<any>();
  public buttonClick$: Observable<any> = this.buttonClickSubject.asObservable();
  public counter: number = 0;
  public data: Post[];
  private jsonPipe = new JsonPipe();

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

  // get data from Data Service
  getData() {
    this.dataService.getPosts().subscribe((posts) => {
      // this.data = this.jsonPipe.transform(data);
      this.data = posts;
      console.table(this.data);
    });
  }
}
