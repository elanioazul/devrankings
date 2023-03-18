import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TablonRoutingModule } from "./tablon-routing.module";
import { TablonComponent } from "./tablon.component";
import { BaseCanvasModule } from "src/app/shared";
@NgModule({
	declarations: [TablonComponent],
	imports: [CommonModule, TablonRoutingModule, BaseCanvasModule],
})
export class TablonModule {}
