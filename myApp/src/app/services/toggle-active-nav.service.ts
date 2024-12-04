import { Location } from '@angular/common';
import { Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToggleActiveNavService{
  private active = new BehaviorSubject<string>("home");
  segments!:any;
  currentURL!:any;
  activeTab = this.active.asObservable();
  changeTab(tab:string) {
    this.active.next(tab);
    // this.currentURL = this._router.url;
    // this.segments = this.currentURL.split('/');
    this.currentURL = this._location.path();
    this.currentURL = this.currentURL.slice(1);
  }
  constructor(private _router : Router, private _location : Location) {}
}
