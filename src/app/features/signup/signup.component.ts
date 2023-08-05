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
						this.createPasswordStrengthValidator(),
					],
				],
				confirmPassword: ["", Validators.required],
			},
			{
				validator: this.createPasswordMatchValidator(
					"password",
					"confirmPassword"
				),
			}
		);
	}

	get password() {
		return this.registerForm.controls["password"];
	}

	get confirmPassword() {
		return this.registerForm.controls["confirmPassword"];
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

	createPasswordStrengthValidator(): ValidatorFn {
		return (control: AbstractControl): ValidationErrors | null => {
			const value = control.value;
			if (!value) {
				return null;
			}
			const hasUpperCase = /[A-Z]+/.test(value);
			const hasLowerCase = /[a-z]+/.test(value);
			const hasNumeric = /[0-9]+/.test(value);

			const passwordValid = hasUpperCase && hasLowerCase && hasNumeric;

			return !passwordValid ? { passwordStrength: true } : null;
		};
	}

	createPasswordMatchValidator = (
		password: string,
		confirmPassword: string
	): ValidatorFn => {
		return (control: AbstractControl): { [key: string]: any } | null => {
			const passwordControl = control.get(password);
			const confirmPasswordControl = control.get(confirmPassword);

			if (!passwordControl || !confirmPasswordControl) {
				return null;
			}

			if (
				confirmPasswordControl.errors &&
				!confirmPasswordControl.errors["passwordMismatch"]
			) {
				return null;
			}

			if (passwordControl.value !== confirmPasswordControl.value) {
				confirmPasswordControl.setErrors({ passwordMismatch: true });
				return { passwordMismatch: true };
			} else {
				confirmPasswordControl.setErrors(null);
				return null;
			}
		};
	};
}
