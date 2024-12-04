import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToggleCartService {
  private active = new BehaviorSubject<boolean>(false);

  activeCart = this.active.asObservable();
  changeActive(active: boolean) {
    this.active.next(active);
  }
  constructor() { }
}
