import { Injectable } from '@angular/core';
import { Auth, authState, signInWithEmailAndPassword, createUserWithEmailAndPassword} from '@angular/fire/auth';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  currentUser$ = authState(this.auth);

  constructor(private auth: Auth) { }

  login(email: string, password: string) {
    return from(signInWithEmailAndPassword(this.auth, email, password));
  }

  logout() {
    return from(this.auth.signOut());
  }

  signUp(email: string, password: string) {
    return from(createUserWithEmailAndPassword(this.auth, email, password));
  }

}
