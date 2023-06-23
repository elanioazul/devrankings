import { Component } from "@angular/core";
import {
	faInstagram,
	faFacebook,
	faTwitter,
	faTelegram,
} from "@fortawesome/free-brands-svg-icons";
@Component({
	selector: "app-footer",
	templateUrl: "./footer.component.html",
	styleUrls: ["./footer.component.scss"],
})
export class FooterComponent {
	instagram = faInstagram;
	facebook = faFacebook;
	twitter = faTwitter;
	telegram = faTelegram;

	socialMedia = [this.instagram, this.facebook, this.twitter, this.telegram];
}
