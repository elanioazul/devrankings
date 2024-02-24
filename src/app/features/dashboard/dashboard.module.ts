import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./dashboard.component";
import { NavigationBarComponent } from "./components/navigation-bar/navigation-bar.component";

@NgModule({
	declarations: [DashboardComponent, NavigationBarComponent],
	imports: [CommonModule, DashboardRoutingModule],
	exports: [DashboardComponent],
})
export class DashboardModule {}
