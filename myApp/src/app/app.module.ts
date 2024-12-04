import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SideCartComponent } from './side-cart/side-cart.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { FeaturedComponent } from './home/featured/featured.component';
import { ProductComponent } from './product/product.component';
import { ShopComponent } from './shop/shop.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { TestimonialsComponent } from './home/testimonials/testimonials.component';
import { TestimonialComponent } from './home/testimonials/testimonial/testimonial.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { ShopTitleComponent } from './shop/shop-title/shop-title.component';
import { ContactTitleComponent } from './contact/contact-title/contact-title.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactFormComponent } from './contact/contact-form/contact-form.component';
import { ContactDetailsComponent } from './contact/contact-details/contact-details.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartProductComponent } from './checkout/cart-product/cart-product.component';
import { CartComponent } from './checkout/cart/cart.component';
import { CartSummaryComponent } from './checkout/cart-summary/cart-summary.component';
import { CartTitleComponent } from './checkout/cart-title/cart-title.component';
import { AboutTitleComponent } from './about/about-title/about-title.component';
import { FiltersComponent } from './shop/filters/filters.component';
import { PriceSliderComponent } from './shop/filters/price-slider/price-slider.component';
import { CategoriesComponent } from './shop/filters/categories/categories.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { AvailabilityComponent } from './shop/filters/availability/availability.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SortComponent } from './shop/sort/sort.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginPopupComponent } from './login-popup/login-popup.component';
import { DashTitleComponent } from './dashboard/dash-title/dash-title.component';
import { EditProductComponent } from './dashboard/edit-product/edit-product.component';
import { AddProductComponent } from './dashboard/add-product/add-product.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SideCartComponent,
    WelcomeComponent,
    FeaturedComponent,
    ProductComponent,
    ShopComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    TestimonialsComponent,
    TestimonialComponent,
    PageTitleComponent,
    ShopTitleComponent,
    ContactTitleComponent,
    ContactFormComponent,
    ContactDetailsComponent,
    CheckoutComponent,
    CartProductComponent,
    CartComponent,
    CartSummaryComponent,
    CartTitleComponent,
    AboutTitleComponent,
    FiltersComponent,
    PriceSliderComponent,
    CategoriesComponent,
    CapitalizePipe,
    AvailabilityComponent,
    SortComponent,
    DashboardComponent,
    LoginPopupComponent,
    DashTitleComponent,
    EditProductComponent,
    AddProductComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
