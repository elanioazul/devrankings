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
	//@ViewChildren("div") items!: QueryList<any>

	constructor() {}

	ngAfterViewInit() {
		this.items.forEach((div) => console.log(div));
		const cards = document.querySelectorAll(".carta");
		const closeButtons = document.querySelectorAll("button");

		cards.forEach((card, i) => {
			card.setAttribute("style", `viewTransitionName: card-${i}`);
			card.addEventListener("click", () => {
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
