import {
	AfterViewInit,
	Component,
	ElementRef,
	Inject,
	OnInit,
	QueryList,
	ViewChild,
	ViewChildren,
	ViewEncapsulation,
} from "@angular/core";
import { keyPointsOfDevRankings } from "../../constants/keypoints";
import { KeypointListItemComponent } from "../keypoint-list-item/keypoint-list-item.component";
import { selectFeatureCount } from "@core/store/device-size/device-size.selector";
import { Subject, Subscription, takeUntil } from "rxjs";
import { Store, select } from "@ngrx/store";
@Component({
	selector: "app-keypoint-list",
	templateUrl: "./keypoint-list.component.html",
	styleUrls: ["./keypoint-list.component.scss"],
	//encapsulation: ViewEncapsulation.None
})
export class KeypointListComponent implements AfterViewInit {
	keyPoints = keyPointsOfDevRankings;

	@ViewChild("item") slider!: ElementRef<HTMLDivElement>;
	@ViewChildren(KeypointListItemComponent, { read: ElementRef })
	items!: QueryList<KeypointListItemComponent>;

	subscription!: Subscription;
	public ngDestroyed$ = new Subject();
	deviceSize: any;

	constructor(private store: Store) {
		this.subscription = this.store
			.pipe(takeUntil(this.ngDestroyed$))
			.pipe(select(selectFeatureCount))
			.subscribe((data: any) => {
				if (data) {
					this.deviceSize = data.deviceSize;
				}
			});
	}

	ngAfterViewInit() {
		const cards = document.querySelectorAll(".item");
		const closeButtons = document.querySelectorAll("button");

		cards.forEach((card, i) => {
			card.setAttribute("style", `viewTransitionName: card-${i}`);
			card.addEventListener("click", () => {
				if (this.deviceSize.category === "mobile") {
					return;
				}

				if (!(document as any).startViewTransition) {
					activateCard(card);
				}
				(document as any).startViewTransition(() => {
					activateCard(card);
				});
			});
		});
		closeButtons.forEach((button) => {
			button.addEventListener("click", (e) => {
				e.stopPropagation();
				if (!(document as any).startViewTransition) {
					cards.forEach((card) => {
						card.classList.remove("featured");
					});
				}
				(document as any).startViewTransition(() => {
					cards.forEach((card) => {
						card.classList.remove("featured");
					});
				});
			});
		});

		const activateCard = (card: any) => {
			cards.forEach((card) => {
				card.classList.remove("featured");
			});
			card.classList.add("featured");
		};
	}
}
