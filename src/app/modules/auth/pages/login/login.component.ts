import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  passwordType: string = 'password';
  errorMessage: string = null;

  constructor(
    private _formBouilder: FormBuilder,
    private _router: Router,
    private _authService: AuthService
  ) {}

  ngOnInit() {
    this.loginForm = this._formBouilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      showPassword: [false],
    });
  }

  onSubmit = async () => {
    this.errorMessage = null;
    this._authService.login(this.loginForm.value).then(
      (data) => {
        this._router.navigate(['tasks']);
        this.loginForm.reset();
      },
      (error) => {
        this.errorMessage =
          'Credenciales incorrectas, intente de nuevo porfavor.';
      }
    );
  };
  showPasswordToogle() {
    const showPassword = this.loginForm.get('showPassword').value;
    this.passwordType = showPassword ? 'text' : 'password';
  }
}
