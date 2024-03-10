import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LandingPageRoutingModule } from "./landing-page-routing.module";
import { LandingPageComponent } from "./landing-page.component";
import { InicioModule } from "@features/inicio/inicio.module";

@NgModule({
	declarations: [LandingPageComponent],
	imports: [CommonModule, LandingPageRoutingModule, InicioModule],
})
export class LandingPageModule {}
