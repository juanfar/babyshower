import { Component, OnInit } from '@angular/core';
import { AuthService } from '@core/services/auth.service';
import { CartService } from '@core/services/cart.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navbarOpen = false;
  user: string
  total$: Observable<number>;

  constructor(
    public auth: AuthService,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.getUser();
    this.getCartLength()
  }
  getUser() {
    this.auth.userProfile$.subscribe(profile => {
      if(profile && profile.nickname) {
        this.user = profile.nickname
      }      
    });
  }
  getCartLength() {
    this.total$ = this.cartService.cart$
    .pipe(
      map(products => products.length)
    );
  }
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}
