import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import { PostListComponentComponent } from './post-list-component/post-list-component.component';
import { PostListItemComponentComponent } from './post-list-item-component/post-list-item-component.component';
import {registerLocaleData} from '@angular/common';
import localeFR from '@angular/common/locales/fr';
import {PostsService} from './services/posts.service';
import { NewPostComponent } from './new-post/new-post.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

registerLocaleData(localeFR);
const appRoutes: Routes = [
  {path: 'posts', component: PostListComponentComponent},
  {path: 'add', component: NewPostComponent},
  {path: '', redirectTo: 'posts', pathMatch: 'full'},
  {path: '**', redirectTo: 'posts'}
];

@NgModule({
  declarations: [
    AppComponent,
    PostListComponentComponent,
    PostListItemComponentComponent,
    NewPostComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
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
