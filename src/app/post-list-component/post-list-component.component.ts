import {Component, OnDestroy, OnInit} from '@angular/core';
import {Post} from '../models/post.models';
import {PostsService} from '../services/posts.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit, OnDestroy {
  postsList: Post[] = [];
  postSuscription: Subscription;
  constructor(private postService: PostsService) { }

  ngOnInit() {
    this.postSuscription = this.postService.postSubject.subscribe(
      (posts: Post[]) => {
        this.postsList = posts;
      }
    );
    this.postService.emitPosts();
  }

  ngOnDestroy() {
    this.postSuscription.unsubscribe();
  }
}
