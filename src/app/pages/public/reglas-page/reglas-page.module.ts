import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ReglasPageRoutingModule } from "./reglas-page-routing.module";
import { ReglasPageComponent } from "./reglas-page.component";

@NgModule({
	declarations: [ReglasPageComponent],
	imports: [CommonModule, ReglasPageRoutingModule],
})
export class ReglasPageModule {}
