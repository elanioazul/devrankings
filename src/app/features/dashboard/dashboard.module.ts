import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./dashboard.component";
import { NavigationBarComponent } from "./components/navigation-bar/navigation-bar.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { LogoModule } from "@shared/components";
import { ButtonModule } from "@shared/components";
@NgModule({
	declarations: [DashboardComponent, NavigationBarComponent],
	imports: [
		CommonModule,
		DashboardRoutingModule,
		FontAwesomeModule,
		LogoModule,
		ButtonModule,
	],
	exports: [DashboardComponent],
})
export class DashboardModule {}
