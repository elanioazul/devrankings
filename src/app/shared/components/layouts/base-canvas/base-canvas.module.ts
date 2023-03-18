import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BaseCanvasComponent } from "./base-canvas.component";

@NgModule({
	declarations: [BaseCanvasComponent],
	imports: [CommonModule],
	exports: [BaseCanvasComponent],
})
export class BaseCanvasModule {}
