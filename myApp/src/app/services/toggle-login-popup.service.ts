import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToggleLoginPopupService {
  private active = new BehaviorSubject<boolean>(false);
  activePopup = this.active.asObservable();

  changeActive(active: boolean){
    this.active.next(active);
  }
  constructor() { }
}
