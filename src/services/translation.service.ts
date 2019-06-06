import { Injectable } from '@angular/core';
import { en, lt } from '../assets/locale';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  constructor() {
    this.setDefault();
  }

  private setDefault() {
    if (!this.getLocalStrg()) {
      this.setLocalStrg('EN');
    }
  }
  public setLocalStrg(lang: string): void {
    return localStorage.setItem('language', lang);
  }

  private getLocalStrg(): string {
    return localStorage.getItem('language');
  }

  public getSelectedLang(): any {
    return this.getLang(this.getLocalStrg());
  }
  public getLang(lang: string): any {
    if (lang === 'LT') {
      return lt;
    } else {
      return en;
    }
  }

}
