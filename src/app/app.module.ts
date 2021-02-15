import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ProductListComponent } from './components/shopping-cart/product-list/product-list.component';
import { CartComponent } from './components/shopping-cart/cart/cart.component';
import { CartItemComponent } from './components/shopping-cart/cart/cart-item/cart-item.component';
//import { ProductItemComponent } from './components/shopping-cart/product-list/product-item/product-item.component';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';
//import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FilterPipe } from './components/shared/Pipes/filter.pipe';
import { AuthComponent } from './components/auth/auth.component';
import { AuthInterceptorService } from './components/auth/auth-interceptor.service';
import { LoadingSpinnerComponent } from './components/shared/loading-spinner/loading-spinner/loading-spinner.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    ShoppingCartComponent,
    //FiltersComponent,
    ProductListComponent,
    CartComponent,
    CartItemComponent,
    //ProductItemComponent,
    PageNotFoundComponent,
    FilterPipe,
    AuthComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    //Ng2SearchPipeModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService,
    multi: true
}],bootstrap: [AppComponent]
})
export class AppModule { }
