import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  post: any = {};
  isInvalid: boolean;
  isSucess: boolean;
  regex = /^[a-zA-Z ]*$/;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  createPost(form: NgForm) {
    console.log(form);
    if (form.invalid || this.isInvalid) return;
    this.http.post('https://jsonplaceholder.typicode.com/posts', this.post).subscribe((response) => {
      form.resetForm();
      this.isSucess = true;
      setTimeout(() => {
        this.isSucess = false;
      }, 2000)
      console.log(response);
    })
  }
  onTitleChange(title) {
    console.log(this.regex.test(title))
    this.isInvalid = !this.regex.test(title);
  }
}
