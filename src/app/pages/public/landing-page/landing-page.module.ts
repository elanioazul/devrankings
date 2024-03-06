import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LandingPageRoutingModule } from "./landing-page-routing.module";
import { LandingPageComponent } from "./landing-page.component";
import { InicioModule } from "@features/inicio/inicio.module";

// import { InicioModule } from "@features/inicio/inicio.module";
// import {
// 	BaseCanvasModule,
// 	BaseCanvasInvertModule,
// 	CoorpFrameModule,
// } from "src/app/shared";

// import { FooterModule } from "@shared/components";

@NgModule({
	declarations: [LandingPageComponent],
	imports: [
		CommonModule,
		LandingPageRoutingModule,
		// InicioModule,
		// BaseCanvasModule,
		// BaseCanvasInvertModule,
		// CoorpFrameModule,
		// FooterModule,
		InicioModule,
	],
})
export class LandingPageModule {}
