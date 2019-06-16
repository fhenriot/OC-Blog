import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../app.component';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input()  postItem: Post;
  constructor() { }

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
    this.postItem.loveIts++;
    console.log(this.postItem.loveIts);
  }
  onRemoveLove() {
    this.postItem.loveIts--;
    console.log(this.postItem.loveIts);
  }
}
