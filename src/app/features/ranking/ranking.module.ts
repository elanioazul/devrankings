import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RankingRoutingModule } from "./ranking-routing.module";
import { RankingComponent } from "./ranking.component";
import { BaseCanvasModule } from "src/app/shared";

@NgModule({
	declarations: [RankingComponent],
	imports: [CommonModule, RankingRoutingModule, BaseCanvasModule],
})
export class RankingModule {}
