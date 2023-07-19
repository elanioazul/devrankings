import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SigninSignupRoutingModule } from "./signin-signup-routing.module";
import { SigninSignupComponent } from "./signin-signup.component";

@NgModule({
	declarations: [SigninSignupComponent],
	imports: [CommonModule, SigninSignupRoutingModule],
	exports: [SigninSignupComponent],
})
export class SigninSignupModule {}
