import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { HotToastService } from '@ngneat/hot-toast';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });
  showNavbar = true;
  hide = true;
  
  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private fb: NonNullableFormBuilder,
    private toast: HotToastService,
    ) {}

  ngOnInit(): void {}

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password')
  }

  submit() {
    if (!this.loginForm.valid) {
      return;
    }
  
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
  
    if (typeof email !== 'string' || typeof password !== 'string') {
      return;
    }
  
    this.authService.login(email, password).pipe(
      this.toast.observe({
        success: 'Logged in successfully',
        loading: 'Logging in...',
        error: ({ message }) => `There was an error: ${message}`,
      })
    ).subscribe(() => {
      this.router.navigate(['/home']);
    })
  }
}
