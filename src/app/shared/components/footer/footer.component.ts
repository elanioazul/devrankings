import { Component, OnDestroy, OnInit } from "@angular/core";
import {
	faInstagram,
	faFacebook,
	faTwitter,
	faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { selectFeatureCount } from "@core/store/device-size/device-size.selector";
import { DeviceSizeState } from "@core/store/device-size";
import { Store, select } from "@ngrx/store";
import { Subject, Subscription, takeUntil } from "rxjs";

@Component({
	selector: "app-footer",
	templateUrl: "./footer.component.html",
	styleUrls: ["./footer.component.scss"],
})
export class FooterComponent implements OnDestroy {
	instagram = faInstagram;
	facebook = faFacebook;
	twitter = faTwitter;
	telegram = faTelegram;

	socialMedia = [this.instagram, this.facebook, this.twitter, this.telegram];

	deviceSize: any;
	public ngDestroyed$ = new Subject();
	subscription!: Subscription;

	constructor(
		private store: Store /*private appStore: Store<DeviceSizeState>*/
	) {
		this.subscription = this.store
			.pipe(takeUntil(this.ngDestroyed$))
			.pipe(select(selectFeatureCount))
			.subscribe((data: any) => {
				if (data) {
					this.deviceSize = data.deviceSize;
				}
			});
	}
	ngOnDestroy(): void {
		this.subscription.unsubscribe();
	}
}
