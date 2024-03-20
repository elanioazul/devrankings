import { Component, OnInit, inject, computed } from "@angular/core";
import { ScreenSizeService } from "@core/services";
import { AuthService } from "@core/services/auth.service";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
	title = "devrankings";
	authService = inject(AuthService);

	constructor(private screenSizeService: ScreenSizeService) {}

	ngOnInit(): void {
		this.screenSizeService.getDeviceSize();
	}
}
