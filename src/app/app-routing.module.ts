import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component'
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component'
import { CartComponent } from './components/shopping-cart/cart/cart.component'
import { AuthComponent } from './components/auth/auth.component'
import { AuthGuard } from './components/auth/auth.guard'

const routes: Routes = [
  { path: '', redirectTo: '/shop', pathMatch: 'full' },
  { path: 'auth', component: AuthComponent },
  { path: 'shop', component: ShoppingCartComponent,canActivate:[AuthGuard] },
  { path: 'cart', component: CartComponent,canActivate:[AuthGuard]},
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
