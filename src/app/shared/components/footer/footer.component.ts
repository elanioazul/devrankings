import {
	AfterViewInit,
	Component,
	ElementRef,
	OnDestroy,
	OnInit,
	Renderer2,
	ViewChild,
	ViewChildren,
} from "@angular/core";
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
import { ScrollwindowService } from "@core/services/scrollwindow.service";

@Component({
	selector: "app-footer",
	templateUrl: "./footer.component.html",
	styleUrls: ["./footer.component.scss"],
})
export class FooterComponent implements OnDestroy, AfterViewInit {
	@ViewChild("fixedSocial", { static: true })
	fixedSocial!: ElementRef<HTMLDivElement>;
	@ViewChild("fixedEmail", { static: true })
	fixedEmail!: ElementRef<HTMLDivElement>;
	instagram = faInstagram;
	facebook = faFacebook;
	twitter = faTwitter;
	telegram = faTelegram;

	socialMedia = [this.instagram, this.facebook, this.twitter, this.telegram];

	deviceSize: any;
	public ngDestroyed$ = new Subject();
	subscription!: Subscription;

	constructor(
		private store: Store /*private appStore: Store<DeviceSizeState>*/,
		private renderer: Renderer2,
		private scrollService: ScrollwindowService
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
	ngAfterViewInit(): void {
		this.changeSocialColor();
	}
	ngOnDestroy(): void {
		this.subscription.unsubscribe();
	}

	changeSocialColor(): void {
		this.scrollService.isScrollAtBottom().subscribe((atBottom) => {
			if (atBottom) {
				console.log("Scrolled to the bottom!");
				this.renderer.addClass(
					this.fixedSocial.nativeElement,
					"box__social-fixed--white"
				);
				this.renderer.addClass(
					this.fixedEmail.nativeElement,
					"box__social-fixed--white"
				);
			} else {
				this.renderer.removeClass(
					this.fixedSocial.nativeElement,
					"box__social-fixed--white"
				);
				this.renderer.removeClass(
					this.fixedEmail.nativeElement,
					"box__social-fixed--white"
				);
			}
		});
	}
}
