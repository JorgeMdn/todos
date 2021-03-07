import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from 'src/app/@shared/shared.module';
import { LoginComponent } from './pages/login/login.component';

const MODULES = [SharedModule];

const COMPONENTS = [LoginComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, AuthRoutingModule, ...MODULES],
})
export class AuthModule {}
