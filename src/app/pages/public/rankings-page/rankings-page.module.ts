import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RankingsPageRoutingModule } from "./rankings-page-routing.module";
import { RankingsPageComponent } from "./rankings-page.component";

@NgModule({
	declarations: [RankingsPageComponent],
	imports: [CommonModule, RankingsPageRoutingModule],
})
export class RankingsPageModule {}
