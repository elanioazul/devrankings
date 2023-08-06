import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SignupRoutingModule } from "./signup-routing.module";
import { SignupComponent } from "./signup.component";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { ButtonModule } from "@shared/components/button/button.module";
import { ErrorFormModule } from "@shared/components/error-form/error-form.module";
import { InputTextModule } from "primeng/inputtext";
@NgModule({
	declarations: [SignupComponent],
	imports: [
		CommonModule,
		SignupRoutingModule,
		FontAwesomeModule,
		ButtonModule,
		ErrorFormModule,
		InputTextModule,
		FormsModule,
		ReactiveFormsModule,
	],
	exports: [SignupComponent],
})
export class SignupModule {}
