import { Component, OnInit } from '@angular/core';
import { ToggleActiveNavService } from '../services/toggle-active-nav.service';
import { ActivatedRoute, UrlSegment } from '@angular/router';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrl: './page-title.component.css'
})
export class PageTitleComponent implements OnInit{
  activeTab!: string;
  constructor(private _activeTab:ToggleActiveNavService){}
  ngOnInit(): void {
    this._activeTab.activeTab.subscribe(
      (active) => this.activeTab = active
    )
  }
}
