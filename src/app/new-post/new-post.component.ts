import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PostsService} from '../services/posts.service';
import {Router} from '@angular/router';
import {Post} from '../models/post.models';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {
  postForm: FormGroup;

  constructor(private postService: PostsService,
              private router: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  onSavePost() {
    if (this.postForm.invalid) {
      return;
    }
    const formValue = this.postForm.value;
    const post = new Post(formValue['title'], formValue['content']);
    this.postService.addPost(post);
    this.router.navigate(['/posts']);
  }

}
