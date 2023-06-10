import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LandingPageRoutingModule } from "./landing-page-routing.module";
import { LandingPageComponent } from "./landing-page.component";

import { HomeModule } from "@features/home/home.module";
import { BaseCanvasModule, CoorpFrameModule } from "src/app/shared";

@NgModule({
	declarations: [LandingPageComponent],
	imports: [
		CommonModule,
		LandingPageRoutingModule,
		HomeModule,
		BaseCanvasModule,
		CoorpFrameModule,
	],
})
export class LandingPageModule {}