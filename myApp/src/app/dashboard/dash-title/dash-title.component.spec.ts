import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashTitleComponent } from './dash-title.component';

describe('DashTitleComponent', () => {
  let component: DashTitleComponent;
  let fixture: ComponentFixture<DashTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashTitleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
