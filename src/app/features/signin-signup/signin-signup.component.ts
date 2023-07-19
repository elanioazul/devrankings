import {
	Component,
	ElementRef,
	OnInit,
	Renderer2,
	ViewChild,
} from "@angular/core";
import { Button } from "primeng/button";

@Component({
	selector: "app-signin-signup",
	templateUrl: "./signin-signup.component.html",
	styleUrls: ["./signin-signup.component.scss"],
})
export class SigninSignupComponent implements OnInit {
	@ViewChild("signUp", { static: true })
	signUpBtn!: ElementRef<HTMLButtonElement>;
	@ViewChild("signIn", { static: true })
	signInBtn!: ElementRef<HTMLButtonElement>;
	@ViewChild("contain", { static: true })
	container!: ElementRef<HTMLDivElement>;

	constructor(private renderer: Renderer2) {}

	ngOnInit(): void {
		this.signUpBtn.nativeElement.addEventListener("click", () => {
			this.renderer.addClass(
				this.container.nativeElement,
				"right-panel-active"
			);
		});
		this.signInBtn.nativeElement.addEventListener("click", () => {
			this.renderer.removeClass(
				this.container.nativeElement,
				"right-panel-active"
			);
		});
	}
}
