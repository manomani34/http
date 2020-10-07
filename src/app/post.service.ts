import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    const header = new HttpHeaders({
      'Content-Type' : 'application/json'
    });
    return this.http.post(this.url, post , {headers: header})
  }

  putPosts(post: IPost, id: number){
    return this.http.put(this.url + "/" + id , post)

  }

  deletPosts(id: number){
    return this.http.delete(this.url + "/" + id )
  }

}
