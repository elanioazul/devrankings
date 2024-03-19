import { Component, ElementRef, Renderer2, ViewChild } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { Sport } from "../../../types/sport.types";

@Component({
	selector: "app-sport-control",
	templateUrl: "./sport-control.component.html",
	styleUrls: ["./sport-control.component.scss"],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: SportControlComponent,
			multi: true,
		},
	],
})
export class SportControlComponent implements ControlValueAccessor {
	@ViewChild("tennisButton") tennisButton!: ElementRef;
	@ViewChild("squashButton") squashButton!: ElementRef;
	@ViewChild("golfButton") golfButton!: ElementRef;
	@ViewChild("tennisFrame") tennisFrame!: ElementRef;
	@ViewChild("squashFrame") squashFrame!: ElementRef;
	@ViewChild("golfFrame") golfFrame!: ElementRef;

	sport = "tenis";

	onChange = (value: Sport) => {};
	onTouch = () => {};

	constructor(private renderer: Renderer2) {}

	setSport(sport: Sport, event: MouseEvent) {
		event.preventDefault();

		this.renderer.removeClass(this.tennisButton.nativeElement, "active");
		this.renderer.removeClass(this.squashButton.nativeElement, "active");
		this.renderer.removeClass(this.golfButton.nativeElement, "active");

		this.renderer.removeClass(this.tennisFrame.nativeElement, "active");
		this.renderer.removeClass(this.squashFrame.nativeElement, "active");
		this.renderer.removeClass(this.golfFrame.nativeElement, "active");

		switch (sport) {
			case "tennis":
				this.renderer.addClass(this.tennisButton.nativeElement, "active");
				this.renderer.addClass(this.tennisFrame.nativeElement, "active");
				break;
			case "fronton":
				this.renderer.addClass(this.squashButton.nativeElement, "active");
				this.renderer.addClass(this.squashFrame.nativeElement, "active");
				break;
			case "padle":
				this.renderer.addClass(this.golfButton.nativeElement, "active");
				this.renderer.addClass(this.golfFrame.nativeElement, "active");
		}

		this.sport = sport;
		this.onChange(sport);
		this.onTouch();
	}

	writeValue(value: Sport) {
		this.sport = value;
	}

	registerOnChange(fn: () => void): void {
		this.onChange = fn;
	}

	registerOnTouched(fn: () => void): void {
		this.onTouch = fn;
	}
}
