import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  url = "https://jsonplaceholder.typicode.com/posts"

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any>{
     return this.http.get(this.url);
  }
  postPosts(post: IPost){
    return this.http.post(this.url, post)
  }

}
