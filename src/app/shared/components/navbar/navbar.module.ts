import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { NavbarComponent } from "./navbar.component";
import { LogoModule } from "../logo";
import { ButtonModule } from "../button";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
@NgModule({
	declarations: [NavbarComponent],
	imports: [
		CommonModule,
		RouterModule,
		LogoModule,
		ButtonModule,
		NgbModule,
		FontAwesomeModule,
	],
	exports: [NavbarComponent],
})
export class NavbarModule {}
