import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { TablonComponent } from "./tablon.component";
const routes: Routes = [
	{
		path: "",
		component: TablonComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class TablonRoutingModule {}
