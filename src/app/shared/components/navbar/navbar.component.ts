import { Component, OnInit } from '@angular/core';
import { AuthService } from '@core/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  user: string

  constructor(
    public auth: AuthService
  ) { }

  ngOnInit() {
    
    this.auth.userProfile$.subscribe(profile => {
      if(profile && profile.nickname) {
        this.user = profile.nickname
      }      
    })
  }

}
