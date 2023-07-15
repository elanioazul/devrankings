import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
//import { BaseCanvasModule, CoorpFrameModule } from "src/app/shared";
import { CardModule } from "@shared/components/card";
import { GridModule } from "@shared/components/layouts/grid";
import { WhatwedoComponent } from "./components/whatwedo/whatwedo.component";
import { ScrollsliderComponent } from "./components/scrollslider/scrollslider.component";
import { KeypointListComponent } from "./components/keypoint-list/keypoint-list.component";
import { KeypointListItemComponent } from "./components/keypoint-list-item/keypoint-list-item.component";
import { InteractiveBallsComponent } from "./components/interactive-balls/interactive-balls.component";
import { DualSliderComponent } from "./components/dual-slider/dual-slider.component";
import { ContactaComponent } from "./components/contacta/contacta.component";

import { PrimengModule } from "@shared/components/primeng/primeng.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ErrorFormModule } from "@shared/components/error-form/error-form.module";

@NgModule({
	declarations: [
		HomeComponent,
		WhatwedoComponent,
		ScrollsliderComponent,
		KeypointListComponent,
		KeypointListItemComponent,
		InteractiveBallsComponent,
		DualSliderComponent,
		ContactaComponent,
	],
	imports: [
		CommonModule,
		HomeRoutingModule,
		// BaseCanvasModule,
		// CoorpFrameModule,
		CardModule,
		GridModule,
		PrimengModule,
		FormsModule,
		ReactiveFormsModule,
		ErrorFormModule,
	],
	exports: [
		WhatwedoComponent,
		ScrollsliderComponent,
		KeypointListComponent,
		KeypointListItemComponent,
		InteractiveBallsComponent,
		DualSliderComponent,
		ContactaComponent,
	],
})
export class HomeModule {}
