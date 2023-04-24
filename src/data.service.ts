import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from './photo';
import { Post } from './post';

@Injectable()
export class DataService {
  constructor(private http: HttpClient) {}
  readonly apiURL = 'https://jsonplaceholder.typicode.com/posts';
  readonly photoURL = 'https://jsonplaceholder.typicode.com/photos';
  getData() {
    return this.http.get(this.apiURL);
  }
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiURL);
  }
  getPhotos(): Observable<Photo[]> {
    return this.http.get<Photo[]>(this.photoURL);
  }
}
