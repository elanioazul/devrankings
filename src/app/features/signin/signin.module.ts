import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SigninRoutingModule } from "./signin-routing.module";
import { SigninComponent } from "./signin.component";
import { BaseCanvasModule } from "src/app/shared";
@NgModule({
	declarations: [SigninComponent],
	imports: [CommonModule, SigninRoutingModule, BaseCanvasModule],
})
export class SigninModule {}
