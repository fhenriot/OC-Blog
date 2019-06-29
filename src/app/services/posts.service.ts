import {Post} from '../models/post.models';
import {Subject} from 'rxjs';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;

export class PostsService {
  private posts: Post[];
  postSubject = new Subject<Post[]>();

  constructor() {
    this.getFromFirebase();
  }

  emitPosts() {
    this.postSubject.next(this.posts);
  }

  getFromFirebase() {
    firebase.database().ref('/posts').on(
      'value',
      (data: DataSnapshot) => {
        this.posts = data.val() ? data.val() : [];
        this.emitPosts();
      }
    );
  }

  saveToFirebase() {
    firebase.database().ref('/posts').set(this.posts);
  }

  addPost(post: Post) {
    this.posts.push(post);
    this.saveToFirebase();
  }

  removePost(index: number) {
    this.posts.splice(index, 1);
    this.saveToFirebase();
  }

  loveIncrements(index: number) {
    this.posts[index].loveIts++;
    this.saveToFirebase();
  }

  loveDecrements(index: number) {
    this.posts[index].loveIts--;
    this.saveToFirebase();
  }
}
