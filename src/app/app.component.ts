import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  postContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.';
  posts = [
    new Post('Mon premier post', this.postContent, 0),
    new Post('Mon deuxième post', this.postContent, 0),
    new Post('Dernier post', this.postContent, 0)
  ];
}

export class Post {
  title: string;
  content: string;
  loveIts: number;
  createdAt: Date;

  constructor(title: string, content: string, loveIts: number) {
    this.title = title;
    this.content = content;
    this.loveIts = loveIts;
    this.createdAt = new Date();
  }
}
