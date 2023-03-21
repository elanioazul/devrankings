import { Component, Input, OnInit } from "@angular/core";

@Component({
	selector: "app-coorp-frame",
	templateUrl: "./coorp-frame.component.html",
	styleUrls: ["./coorp-frame.component.scss"],
})
export class CoorpFrameComponent implements OnInit {
	@Input() text!: string;
	@Input() height!: string;
	@Input() width!: string;
	@Input() margin!: string;
	@Input() padding!: string;
	@Input() backgroundcolor!: string;
	@Input() borderTop!: string;
	@Input() borderRight!: string;
	@Input() borderBottom!: string;
	@Input() borderLeft!: string;
	constructor() {}
	ngOnInit(): void {
		//this.height = this.height+'px'
	}
}
