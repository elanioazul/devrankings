import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TablonRoutingModule } from "./tablon-routing.module";
import { TablonComponent } from "./tablon.component";

@NgModule({
	declarations: [TablonComponent],
	imports: [CommonModule, TablonRoutingModule],
})
export class TablonModule {}
