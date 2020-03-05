import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hello-world';

  post = {
    title: "Title",
    isFavorite: true,
  }

  tweet = {
    body: 'Here is the body of a tweet...',
    isLiked: false,
    likesCount: 0
  }


  onFavoriteChange(eventArgs: FavoriteChangedEventArgs) {
    console.log("Favorite Changed", eventArgs);

  }
}

