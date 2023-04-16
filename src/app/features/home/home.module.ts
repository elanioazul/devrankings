import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { BaseCanvasModule, CoorpFrameModule } from "src/app/shared";
import { WhatwedoComponent } from "./whatwedo/whatwedo.component";
import { ScrollsliderComponent } from "./scrollslider/scrollslider.component";

@NgModule({
	declarations: [HomeComponent, WhatwedoComponent, ScrollsliderComponent],
	imports: [
		CommonModule,
		HomeRoutingModule,
		BaseCanvasModule,
		CoorpFrameModule,
	],
})
export class HomeModule {}
