import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { BaseCanvasModule, CoorpFrameModule } from "src/app/shared";
import { CardModule } from "@shared/components/card";
import { GridModule } from "@shared/components/layouts/grid";
import { WhatwedoComponent } from "./whatwedo/whatwedo.component";
import { ScrollsliderComponent } from "./scrollslider/scrollslider.component";
import { KeyPointListComponent } from "./key-points/keypoint-list.component";
import { KeiPointComponent } from "./key-points/keypoint/keypoint.component";

@NgModule({
	declarations: [
		HomeComponent,
		WhatwedoComponent,
		ScrollsliderComponent,
		KeyPointListComponent,
		KeiPointComponent,
	],
	imports: [
		CommonModule,
		HomeRoutingModule,
		BaseCanvasModule,
		CoorpFrameModule,
		CardModule,
		GridModule,
	],
})
export class HomeModule {}
