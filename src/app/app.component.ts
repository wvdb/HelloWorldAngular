import { Component, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
  title: string;
  environment: string = 'DEV';

  ngOnInit(): void {
    this.title = 'My Angular Website';
  }

}
