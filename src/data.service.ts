import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './post';

@Injectable()
export class DataService {
  constructor(private http: HttpClient) {}
  readonly apiURL = 'https://jsonplaceholder.typicode.com/posts';
  getData() {
    return this.http.get(this.apiURL);
  }
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiURL);
  }
}
