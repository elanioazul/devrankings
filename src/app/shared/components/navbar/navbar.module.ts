import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar.component';
import { LogoModule } from '../logo';
import { ButtonModule } from '../button';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    LogoModule,
    ButtonModule,
  ],
  exports: [NavbarComponent]
})
export class NavbarModule { }
