import { Component, inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { IUser } from "@core/interfaces/user.interface";
import { AuthService } from "@core/services/auth.service";
import {
	faGooglePlusG,
	faFacebookF,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";

@Component({
	selector: "app-signin",
	templateUrl: "./signin.component.html",
	styleUrls: ["./signin.component.scss"],
})
export class SigninComponent {
	authService = inject(AuthService);

	faFb = faFacebookF;
	faInsta = faInstagram;
	faGoogle = faGooglePlusG;

	loginForm!: FormGroup;
	fb: FormBuilder = inject(FormBuilder);

	constructor() {
		this.loginForm = this.fb.group({
			email: ["", [Validators.required, Validators.email]],
			password: ["", [Validators.required, Validators.minLength(8)]],
		});
	}

	onSumbmit(): void {
		const user: IUser = {
			email: this.loginForm.get("email")?.value,
			password: this.loginForm.get("password")?.value,
		};
		this.authService.login(user);
	}
}
