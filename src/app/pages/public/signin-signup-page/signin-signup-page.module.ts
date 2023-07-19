import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SigninSignupPageRoutingModule } from "./signin-signup-page-routing.module";
import { SigninSignupPageComponent } from "./signin-signup-page.component";

import { SigninSignupModule } from "@features/signin-signup/signin-signup.module";

@NgModule({
	declarations: [SigninSignupPageComponent],
	imports: [CommonModule, SigninSignupPageRoutingModule, SigninSignupModule],
})
export class SigninSignupPageModule {}
