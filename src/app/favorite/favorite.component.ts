import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  @Input('isFavorite') isSelected: boolean;
  @Output('change') click = new EventEmitter;

  constructor() { }

  onClick() {
    console.log('test');
    this.isSelected = !this.isSelected;
    this.click.emit({ newValue: this.isSelected });
  }

  ngOnInit() {
  }

}

export interface FavoriteChangedEventArgs {
  newValue: boolean
}

