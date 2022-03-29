import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  isGranted?: boolean;
  title = 'TenetNgMaterial';

  constructor(){

  }

  ngOnInit(): void {
      this.isGranted = false;
  }
}
