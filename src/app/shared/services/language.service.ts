import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  $lang: BehaviorSubject<string> = new BehaviorSubject<string>('en');

  constructor() {}
}
