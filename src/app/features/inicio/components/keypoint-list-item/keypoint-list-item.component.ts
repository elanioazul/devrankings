import { OnInit, Component, Input, ViewEncapsulation } from "@angular/core";
import { IKeyPoint } from "@features/inicio/interfaces/IkeyPoint";
@Component({
	selector: "app-keypoint-list-item",
	templateUrl: "./keypoint-list-item.component.html",
	styleUrls: ["./keypoint-list-item.component.scss"],
	//encapsulation: ViewEncapsulation.None,
})
export class KeypointListItemComponent implements OnInit {
	@Input() keyPoint!: IKeyPoint;
	constructor() {}

	ngOnInit() {}
}
