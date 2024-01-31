import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LandingPageRoutingModule } from "./landing-page-routing.module";
import { LandingPageComponent } from "./landing-page.component";

import { HomeModule } from "@features/home/home.module";
import {
	BaseCanvasModule,
	BaseCanvasInvertModule,
	CoorpFrameModule,
} from "src/app/shared";

import { FooterModule } from "@shared/components";

@NgModule({
	declarations: [LandingPageComponent],
	imports: [
		CommonModule,
		LandingPageRoutingModule,
		HomeModule,
		BaseCanvasModule,
		BaseCanvasInvertModule,
		CoorpFrameModule,
		FooterModule,
	],
})
export class LandingPageModule {}
