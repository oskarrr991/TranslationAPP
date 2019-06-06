// SORTING ALPHABETICALLY BY THE FINAL LETTER
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  words: Array<string> = ['Apple', 'Orange', 'Banana', 'Mango', 'Watermelon'];

  constructor() { }

  ngOnInit() {
    // tslint:disable-next-line:only-arrow-functions
    const sorted = this.words.sort(function(a, b) {

      if (a[a.length - 1] > b[b.length - 1]) {
          return 1;
      } else if (a[a.length - 1] < b[b.length - 1]) {
          return -1;
        }
      return 0;
    });
    console.log(sorted);
  }

}
