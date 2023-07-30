import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SigninRoutingModule } from "./signin-routing.module";
import { SigninComponent } from "./signin.component";

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { ButtonModule } from "@shared/components/button/button.module";

@NgModule({
	declarations: [SigninComponent],
	imports: [CommonModule, SigninRoutingModule, FontAwesomeModule, ButtonModule],
	exports: [SigninComponent],
})
export class SigninModule {}
