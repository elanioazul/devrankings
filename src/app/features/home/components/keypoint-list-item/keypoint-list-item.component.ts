import { Component, Input } from "@angular/core";
import { IKeyPoint } from "@features/home/interfaces/IkeyPoint";
@Component({
	selector: "app-keypoint-list-item",
	templateUrl: "./keypoint-list-item.component.html",
	styleUrls: ["./keypoint-list-item.component.scss"],
})
export class KeypointListItemComponent {
	@Input() keyPoint!: IKeyPoint;
	constructor() {}
}
