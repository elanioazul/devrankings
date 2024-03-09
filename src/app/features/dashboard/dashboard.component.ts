import { Component, OnInit, inject } from "@angular/core";
import { Router } from "@angular/router";

@Component({
	selector: "app-dashboard",
	templateUrl: "./dashboard.component.html",
	styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
	router = inject(Router);
	ngOnInit(): void {
		//this.router.events.subscribe(event => console.log(event));
	}
}
