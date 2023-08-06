import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ButtonComponent } from "./button.component";
import { PrimengModule } from "../primeng/primeng.module";

@NgModule({
	declarations: [ButtonComponent],
	imports: [CommonModule, PrimengModule],
	exports: [ButtonComponent],
})
export class ButtonModule {}
