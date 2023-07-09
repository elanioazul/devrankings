import { Component, inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
	selector: "app-contacta",
	templateUrl: "./contacta.component.html",
	styleUrls: ["./contacta.component.scss"],
})
export class ContactaComponent {
	contactaForm!: FormGroup;
	fb: FormBuilder = inject(FormBuilder);

	loading: boolean = false;

	constructor() {
		this.contactaForm = this.fb.group({
			names: ["", Validators.required, Validators.required],
			email: ["", [Validators.required, Validators.email]],
			phone: ["", [Validators.required, Validators.minLength(9)]],
			subject: ["", Validators.required, Validators.required],
			message: ["", [Validators.required, Validators.minLength(8)]],
		});
	}

	load() {
		this.loading = true;

		setTimeout(() => {
			this.loading = false;
		}, 2000);
	}
}
