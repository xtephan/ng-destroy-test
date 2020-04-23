import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public enabled = true;

  constructor() {}

  ngOnInit(): void {}

  toggle() {
    this.enabled = !this.enabled;
  }
}
