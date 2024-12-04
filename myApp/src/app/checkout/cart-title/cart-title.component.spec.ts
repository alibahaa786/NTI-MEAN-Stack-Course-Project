import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartTitleComponent } from './cart-title.component';

describe('CartTitleComponent', () => {
  let component: CartTitleComponent;
  let fixture: ComponentFixture<CartTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartTitleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
