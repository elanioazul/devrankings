import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
	selector: "app-button",
	templateUrl: "./button.component.html",
	styleUrls: ["./button.component.scss"],
})
export class ButtonComponent {
	@Input() type!: string;
	@Input() inputText!: string;
	@Input() label!: string;
	@Input() loading!: boolean;
	@Input() isDisabled!: boolean;

	@Output() buttonClick = new EventEmitter<void>();

	onButtonClick(): void {
		this.buttonClick.emit();
	}
}
