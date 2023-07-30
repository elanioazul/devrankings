import { Component } from "@angular/core";
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
	faFb = faFacebookF;
	faInsta = faInstagram;
	faGoogle = faGooglePlusG;
}
