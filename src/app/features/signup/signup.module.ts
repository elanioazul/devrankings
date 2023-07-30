import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SignupRoutingModule } from "./signup-routing.module";
import { SignupComponent } from "./signup.component";

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { ButtonModule } from "@shared/components/button/button.module";
@NgModule({
	declarations: [SignupComponent],
	imports: [CommonModule, SignupRoutingModule, FontAwesomeModule, ButtonModule],
	exports: [SignupComponent],
})
export class SignupModule {}
