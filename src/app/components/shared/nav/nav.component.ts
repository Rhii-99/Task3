import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  private userSub: Subscription;

  constructor( private authService: AuthService
    ) { }
    ngOnInit() {
      this.userSub = this.authService.user.subscribe(user => {
        this.isAuthenticated = !!user;
        console.log(!user);
        console.log(!!user);
      });
    }

    onLogout() {
      this.isAuthenticated=false;
      this.authService.logout();
    }
  
    ngOnDestroy() {
      this.userSub.unsubscribe();
    }
  }
