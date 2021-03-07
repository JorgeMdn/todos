import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { SessionData } from '../data/session-data.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  email: string;
  password: string;

  autenticationState = new BehaviorSubject(false);

  constructor(private zone: NgZone, private router: Router) {
    this.email = 'jorge@gmail.com';
    this.password = '123';
  }

  login = (formData: { email: string; password: string }) => {
    return new Promise((resolve, reject) => {
      if (this.email == formData.email && this.password == formData.password) {
        this.authenticate();
        this.saveSession(formData);
        resolve(true); //retornar datos de la sesion
      } else {
        reject('Credenciales incorrectas, favor de intentar');
      }
    });
  };

  isAuthenticated() {
    return this.autenticationState.value;
  }
  existSession = () => {
    return localStorage.getItem('sessionData');
  };

  authenticate() {
    this.autenticationState.next(true);
  }

  unauthenticate() {
    this.autenticationState.next(false);
  }
  saveSession(sessionData: any) {
    localStorage.setItem('sessionData', JSON.stringify(sessionData));
    return true;
  }

  loadSession() {
    let sessionData: SessionData = JSON.parse(
      localStorage.getItem('sessionData')
    );
    return sessionData;
  }

  removeSession() {
    localStorage.removeItem('sessionData');
    return true;
  }

  register = () => {};

  logout = () => {
    this.unauthenticate();
    this.removeSession();
    this.zone.run(() => {
      this.router.navigate(['/', 'auth']);
    });
  };
}
