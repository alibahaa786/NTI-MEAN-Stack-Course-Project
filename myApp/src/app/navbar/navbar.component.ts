import { Component, HostListener, OnInit } from '@angular/core';
import { ToggleCartService } from '../services/toggle-cart.service';
import { Observable } from 'rxjs/internal/Observable';
import { ToggleActiveNavService } from '../services/toggle-active-nav.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartService } from '../services/cart.service';
import { ToggleLoginPopupService } from '../services/toggle-login-popup.service';
import { UserDataService } from '../services/user-data.service';
import { User } from '../models/User';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  activeCart!: boolean;
  isActiveTab!: string;
  totalQuantity!: number;
  activeLogin !: boolean;
  currentUser !: User;

  constructor(private _activeCart: ToggleCartService, private _activeTab: ToggleActiveNavService, private _router: Router, private _cart:CartService, private _togglePopup: ToggleLoginPopupService, private _user: UserDataService, private _api: ApiService) { }

  ngOnInit(): void {
    this._activeCart.activeCart.subscribe(
      (active) => this.activeCart = active
    );
    this._activeTab.activeTab.subscribe(
      (activeTab) => this.isActiveTab = activeTab
    );
    this._togglePopup.activePopup.subscribe(
      active => this.activeLogin = active
    );
    this._cart.totalQuantity.subscribe((totalQ)=>this.totalQuantity = totalQ);
    this._user.currentUser$.subscribe(
      (user) => this.currentUser = user.user
    )
  }

  showCart() {
    this._activeCart.changeActive(!this.activeCart);
  }

  isAdmin() {
    if (this.currentUser) {
      return this.currentUser.email === "admin@admin.com"
    } else {
      return false;
    }
  }
  
  showLogin(){
    this._togglePopup.changeActive(!this.activeLogin);
  }

  signOut() {
    this._api.postCart(this._cart.getReqBodyCart()).subscribe();
    this._user.signOut();
  }

  changeTab(tab: string) {
    this._activeTab.changeTab(tab);
  }

  goHome(){
    this._activeTab.changeTab('home');
    this._router.navigate(['/']);
  }

  // currentPageY = 0;
  @HostListener("window: scroll", []) onScroll() {
    return window.scrollY;
  }
}
