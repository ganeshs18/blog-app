import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  PostList: any;
  comments: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getPost();
  }

  getPost() {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe((data) => {
      console.log(data);
      this.PostList = data;
    });
  }

  getComments(postId) {
    this.http.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`).subscribe((data) => {
      console.log(data);
      this.comments = data;
    });
  }

 
  deletePost(postId, index) {
    console.log(postId, index)
    this.http.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`).subscribe((data) => {
      console.log("post deleted")
      this.PostList.splice(index, 1);
    });
  }
}
