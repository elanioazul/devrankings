import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RankingsRoutingModule } from "./rankings-routing.module";
import { RankingsComponent } from "./rankings.component";
import { SportControlModule } from "@shared/components";

@NgModule({
	declarations: [RankingsComponent],
	imports: [CommonModule, RankingsRoutingModule, SportControlModule],
})
export class RankingsModule {}
