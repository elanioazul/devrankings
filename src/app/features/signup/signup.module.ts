import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SignupRoutingModule } from "./signup-routing.module";
import { SignupComponent } from "./signup.component";

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@NgModule({
	declarations: [SignupComponent],
	imports: [CommonModule, SignupRoutingModule, FontAwesomeModule],
	exports: [SignupComponent],
})
export class SignupModule {}
