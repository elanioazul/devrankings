import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DocumentsRoutingModule } from "./documents-routing.module";
import { DocumentsComponent } from "./documents.component";
import { BaseCanvasModule } from "src/app/shared";
@NgModule({
	declarations: [DocumentsComponent],
	imports: [CommonModule, DocumentsRoutingModule, BaseCanvasModule],
})
export class DocumentsModule {}
