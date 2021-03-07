import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  email: string;
  password: string;

  autenticationState = new BehaviorSubject(false);

  constructor() {
    this.email = 'jorge';
    this.password = '123';
  }

  login = (formData: { email: string; password: string }) => {
    return new Promise((resolve, reject) => {
      if (this.email == formData.email && this.password == formData.password) {
        this.authenticate();
        resolve(true); //retornar datos de la sesion
      } else {
        reject('Credenciales incorrectas, favor de intentar');
      }
    });
  };

  isAuthenticated() {
    return this.autenticationState.value;
  }

  authenticate() {
    this.autenticationState.next(true);
  }

  unauthenticate() {
    this.autenticationState.next(false);
  }

  register = () => {};

  logout = () => {};
}
