import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'supertz';
  constructor(public authService: AuthenticationService, private router: Router) {}

  logOut() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['']);
    })
  }
}
