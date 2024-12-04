import { Injectable, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserDataService{
  accessToken !: string;
  private currentUser = new BehaviorSubject<any>('');
  currentUser$ = this.currentUser.asObservable();
  

  constructor(private _api: ApiService, private _router: Router) { }
  
  signOut() {
    localStorage.removeItem('token');
    this._api.addToken('');
    this.currentUser.next({});
    this._router.navigate(['/']);
  }

  getUser() {
    return this.currentUser.value.user;
  }
  
  initiateUser() {
    this._api.token$.subscribe(
      async (token) => {
        if (token) {
          this.accessToken = token;
          this.currentUser.next(jwtDecode<any>(this.accessToken));
        }
      }
    )
  }
}
