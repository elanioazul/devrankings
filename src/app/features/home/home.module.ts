import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { BaseCanvasModule, CoorpFrameModule } from "src/app/shared";
import { WhatwedoComponent } from "./whatwedo/whatwedo.component";

@NgModule({
	declarations: [HomeComponent, WhatwedoComponent],
	imports: [
		CommonModule,
		HomeRoutingModule,
		BaseCanvasModule,
		CoorpFrameModule,
	],
})
export class HomeModule {}
