import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FormsModule } from "@angular/forms";
import { ErrorFormComponent } from "./error-form.component";

@NgModule({
	declarations: [ErrorFormComponent],
	imports: [CommonModule, FormsModule],
	exports: [ErrorFormComponent],
})
export class ErrorFormModule {}
