
import { Component } from '@angular/core';
import { CoursesService } from './course/courses.service';

@Component({
  selector: 'courses',
  template: `

  <h2> LIKES Assignment </h2>
  <div
    (click)="liked = !liked"
    [style.backgroundColor]="liked ? 'aquamarine' : 'grey'"
  >
  LIKES
  </div>

  <h2> title casing </h2>

  <input [(ngModel)]="toTitleText" />
  <h3>{{ toTitleText | titleCase }}</h3>
  <br>


    <h2>{{ "Title: " + title }}</h2>
    <ul>
      <li *ngFor="let course of courses">
        {{ course }}
      </li>
    </ul>
    <div (click)="onDivClick()">
      <button
      class="btn btn-primary"
      [class.active]="isActive"
      [style.backgroundColor]="isActive ? 'blue' : 'white'"
      (click)="onSave($event)"
      >
        BTN
      </button>

      <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />

    </div>

    <h2> PIPES </h2>
    <div>
      <p>{{ course.title | uppercase | lowercase }}</p>
      <p>{{ course.students | number }}</p>
      <p>{{ course.rating | number:'1.1-1' }}</p>
      <p>{{ course.price | currency:'AUD':false:'5.2-2' }}</p>
      <p>{{ course.releaseDate | date:'shortDate'}}</p>
    </div>

    <h2>CUSTOM PIPE</h2>
    <div>
      {{ text | summary:10 }}
    </div>
  `,

  //  one way data binding with template variable '#email'
  // <input #email (keyup.enter)="onKeyUp(email.value)" />

})

export class CoursesComponent {
  title: string = "List of Courses"
  courses;

  email: string = "me@example.com";
  isActive: boolean = true;
  liked: boolean = false;

  text = `
  This is a bunch of words to test piping. What else shoould I write here??
  `;
  course = {
    title: "TEST TITLE",
    rating: 4.9454,
    students: 30123,
    price: 190.95,
    releaseDate: new Date(2016, 3, 1)
  }
  toggleDivColor() {
    this.liked = !this.liked;
  }
  onSave($event) {
    $event.stopPropagation();
    console.log("Button was clicked", $event);
  }
  onDivClick() {
    console.log("Div Clicked");
  }
  onKeyUp() {
    console.log(this.email);
  }



  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }
}
