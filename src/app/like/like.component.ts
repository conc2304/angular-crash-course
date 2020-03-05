import { Component, Input } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent {
  @Input('like-count') likeCount: number;
  @Input('is-active') isActive: boolean;

  faHeart = faHeart;

  onClick() {
    if (!this.isActive) {
      this.likeCount++;
    } else {
      this.likeCount--;
    }
    this.isActive = !this.isActive;
  }
}
