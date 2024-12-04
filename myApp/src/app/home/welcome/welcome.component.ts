import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToggleActiveNavService } from '../../services/toggle-active-nav.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {
  constructor(private _router: Router, private _activeTab: ToggleActiveNavService) {}
  goShop() {
    this._activeTab.changeTab('shop');
    this._router.navigate(['/shop']);
  }
}
