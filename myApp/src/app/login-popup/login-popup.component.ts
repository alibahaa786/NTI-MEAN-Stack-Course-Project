import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { LoginForm } from '../models/LoginForm';
import { SignUpForm } from '../models/SignUpForm';
import { ToggleLoginPopupService } from '../services/toggle-login-popup.service';
import { CurrentUserService } from '../services/current-user.service';
import { Router } from '@angular/router';
import { ToggleActiveNavService } from '../services/toggle-active-nav.service';
import { UserDataService } from '../services/user-data.service';
import { ProductDataService } from '../services/product-data.service';
import { CartComponent } from '../checkout/cart/cart.component';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-login-popup',
  templateUrl: './login-popup.component.html',
  styleUrl: './login-popup.component.css'
})
export class LoginPopupComponent implements OnInit {
  signUpActive = false;
  loginPopupActive !: boolean;
  password = "";
  retypePass = "";
  passChecked = false;
  incorrectCred = false;
  emailPattern = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$';
  passwordPattern = '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[A-Za-z\\d]{8,}$';


  constructor(private _api: ApiService, private _togglePopup: ToggleLoginPopupService, private _user: UserDataService, private _router: Router, private _tab: ToggleActiveNavService, private _productData: ProductDataService, private _cart: CartService) { }

  ngOnInit(): void {
    this._togglePopup.activePopup.subscribe(active => this.loginPopupActive = active);
  }

  updatePass(pass: string) {
    this.password = pass;
  }

  checkPassword() {
    if (this.password === this.retypePass) {
      this.passChecked = true;
    } else {
      this.passChecked = false;
    }
  }

  showLogin() {
    this._togglePopup.changeActive(false);
    this.incorrectCred = false;
  }

  login(form: NgForm) {
    const loginCred: LoginForm = form.value;
    this._api.login(loginCred).subscribe({
      next: _ => {
        this._router.navigate(['/']);
        this._togglePopup.changeActive(false);
        this.incorrectCred = false;
        this._tab.changeTab('home');
        this._user.initiateUser();
        this._api.getCart().subscribe({
          next: (products) => {
            const totalQ = this._productData.loadCart(products);
            const totalPrice = products.reduce((total, product) => total + (product.price * product.quantity), 0);
            this._cart.totalPrice = totalPrice;
            this._cart.updateCart();
            this._cart.increaseCart(totalQ);
          },
          error: err => {
            console.log(err)
          }
        })
      },
      error: err => {
        console.log(err)
        this.incorrectCred = true;
      }
    })
  }

  signup(form: NgForm) {
    let userToken;
    const signUpCred: SignUpForm = form.value;
    this._api.signup(signUpCred).subscribe({
      next: _ => {
        this._router.navigate(['/']);
        this._togglePopup.changeActive(false);
        this._tab.changeTab('home');
        this._user.initiateUser();
      },
      error: err => console.log(err)
    })
  }
}
