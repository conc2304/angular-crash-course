import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor() {
  }
  getAuthors = () => {
    return ["author 1", "author 2", "author 3"];
  }
}
