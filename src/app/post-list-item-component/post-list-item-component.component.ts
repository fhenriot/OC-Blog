import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../models/post.models';
import {PostsService} from '../services/posts.service';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input()  postItem: Post;
  @Input() index: number;
  constructor(private postService: PostsService) { }

  ngOnInit() {
  }

  getColor() {
    if (this.postItem.loveIts > 0) {
      return 'green';
    } else if (this.postItem.loveIts < 0) {
      return 'red';
    }
  }
  onAddLove() {
    this.postService.loveIncrements(this.index);
  }
  onRemoveLove() {
    this.postService.loveDecrements(this.index);
  }
  onRemovePost() {
    this.postService.removePost(this.index);
  }
}
