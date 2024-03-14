import { Component } from "@angular/core";
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
	sport = "tenis";

	onChange = (value: Sport) => {};
	onTouch = () => {};

	setSport(sport: Sport, event: MouseEvent) {
		event.preventDefault();
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
