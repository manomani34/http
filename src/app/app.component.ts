import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IPost } from './post';
import { PostService } from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  @ViewChild('postTitle') postTitle:ElementRef;
  @ViewChild('postBody') postBody:ElementRef;
  postsArray;
  displayedColumns: string[] = ['userId', 'title', 'body'];
  dataSource: IPost [] ;
  constructor(private postService: PostService){}

  ngOnInit(): void {
    this.postService.getPosts().subscribe(
      (Response) => {this.postsArray = Response;
      this.dataSource = Response;}
    );    
  }

  addPost(){
    let post: IPost = {UserId: 0, Title: '', body: ''};
    post.UserId = 10;
    post.Title = this.postTitle.nativeElement.value;
    post.body = this.postBody.nativeElement.value;

    this.postService.postPosts(post).subscribe(
      (response) => console.log(response)
      )
    
  }
}
