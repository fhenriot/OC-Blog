import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { PostListComponentComponent } from './post-list-component/post-list-component.component';
import { PostListItemComponentComponent } from './post-list-item-component/post-list-item-component.component';

import {registerLocaleData, ɵregisterLocaleData} from '@angular/common';
import localeFR from '@angular/common/locales/fr';
import {PostsService} from './services/posts.service';

registerLocaleData(localeFR);

@NgModule({
  declarations: [
    AppComponent,
    PostListComponentComponent,
    PostListItemComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'fr'
    },
    PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule
{}
