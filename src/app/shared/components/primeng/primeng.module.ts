import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InputTextModule } from "primeng/inputtext";
import { InputTextareaModule } from "primeng/inputtextarea";
import { ButtonModule } from "primeng/button";
import { InputNumberModule } from "primeng/inputnumber";
@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		InputTextModule,
		InputTextareaModule,
		ButtonModule,
		InputNumberModule,
	],
	exports: [
		InputTextModule,
		InputTextareaModule,
		ButtonModule,
		InputNumberModule,
	],
})
export class PrimengModule {}
