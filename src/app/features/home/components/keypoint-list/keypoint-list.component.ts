import { Component } from "@angular/core";
import { keyPointsOfDevRankings } from "../../constants/keypoints";
@Component({
	selector: "app-keypoint-list",
	templateUrl: "./keypoint-list.component.html",
	styleUrls: ["./keypoint-list.component.scss"],
})
export class KeypointListComponent {
	keyPoints = keyPointsOfDevRankings;
	constructor() {}
}
