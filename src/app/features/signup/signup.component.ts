import { Component, inject } from "@angular/core";
import {
	AbstractControl,
	FormBuilder,
	FormControl,
	FormGroup,
	ValidationErrors,
	ValidatorFn,
	Validators,
} from "@angular/forms";
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
		this.registerForm = this.fb.group(
			{
				name: ["", Validators.required],
				surnames: ["", Validators.required],
				email: ["", [Validators.required, Validators.email]],
				password: [
					"",
					[
						Validators.required,
						Validators.minLength(8),
						Validators.maxLength(24),
					],
				],
				confirmPassword: ["", Validators.required],
			},
			{ validators: this.checkPasswords }
		);
	}

	checkPasswords: ValidatorFn = (
		group: AbstractControl
	): ValidationErrors | null => {
		if (this.registerForm) {
			let pass = this.registerForm.controls["password"].value;
			let confirmPass = this.registerForm.controls["confirmPassword"].value;
			return pass === confirmPass ? null : { notSame: true };
		} else {
			return null;
		}
	};
}
