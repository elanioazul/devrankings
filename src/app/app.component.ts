import { Component, OnInit } from "@angular/core";
import { ScreenSizeService } from "@core/services";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
	title = "devrankings";

	constructor(private screenSizeService: ScreenSizeService) {}

	ngOnInit(): void {
		this.screenSizeService.getDeviceSize();
	}
}
