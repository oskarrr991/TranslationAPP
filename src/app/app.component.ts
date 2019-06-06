import { TranslationService } from './../services/translation.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dev';
  constructor(public _trans: TranslationService) {
  }
}
