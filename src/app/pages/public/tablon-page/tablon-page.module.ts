import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TablonPageRoutingModule } from "./tablon-page-routing.module";
import { TablonPageComponent } from "./tablon-page.component";

@NgModule({
	declarations: [TablonPageComponent],
	imports: [CommonModule, TablonPageRoutingModule],
})
export class TablonPageModule {}
