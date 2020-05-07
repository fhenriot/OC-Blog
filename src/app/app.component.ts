import {Component} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {
    const firebaseConfig = {
      apiKey: '/*TODO*/',
      authDomain: 'oc-blog-6b949.firebaseapp.com',
      databaseURL: 'https://oc-blog-6b949.firebaseio.com',
      projectId: 'oc-blog-6b949',
      storageBucket: '',
      messagingSenderId: '523906006245',
      appId: '1:523906006245:web:24b8c743cabd7008'
    };
    firebase.initializeApp(firebaseConfig);
  }
}

