import { Component, inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {
	faGooglePlusG,
	faFacebookF,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";
@Component({
	selector: "app-signup",
	templateUrl: "./signup.component.html",
	styleUrls: ["./signup.component.scss"],
})
export class SignupComponent {
	faFb = faFacebookF;
	faInsta = faInstagram;
	faGoogle = faGooglePlusG;

	registerForm!: FormGroup;
	fb: FormBuilder = inject(FormBuilder);

	constructor() {
		this.registerForm = this.fb.group({
			name: ["", Validators.required],
			email: ["", [Validators.required, Validators.email]],
			password: ["", [Validators.required, Validators.minLength(8)]],
			passwordCheck: ["", [Validators.required, Validators.minLength(8)]],
		});
	}
}
