import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { BaseCanvasModule } from "src/app/shared";

@NgModule({
	declarations: [HomeComponent],
	imports: [CommonModule, HomeRoutingModule, BaseCanvasModule],
})
export class HomeModule {}
