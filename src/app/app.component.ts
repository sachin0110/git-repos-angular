import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Git Repos and its respectve commits';
  version = 'Angular version 13.2.3';

  constructor() {}

  ngOnInit() {

  }
}