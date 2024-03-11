import { Component } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

type Sport = "tennis" | "squash" | "golf";
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
	mood = "neutral";

	onChange = (value: Sport) => {};
	onTouch = () => {};

	setSport(mood: Sport) {
		this.mood = mood;
		this.onChange(mood);
		this.onTouch();
	}

	writeValue(value: Sport) {
		this.mood = value;
	}

	registerOnChange(fn: () => void): void {
		this.onChange = fn;
	}

	registerOnTouched(fn: () => void): void {
		this.onTouch = fn;
	}
}
