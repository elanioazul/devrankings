import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SigninRoutingModule } from "./signin-routing.module";
import { SigninComponent } from "./signin.component";

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@NgModule({
	declarations: [SigninComponent],
	imports: [CommonModule, SigninRoutingModule, FontAwesomeModule],
	exports: [SigninComponent],
})
export class SigninModule {}
