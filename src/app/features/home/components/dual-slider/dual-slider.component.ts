import {
	Component,
	ElementRef,
	OnInit,
	Renderer2,
	ViewChild,
} from "@angular/core";

@Component({
	selector: "app-dual-slider",
	templateUrl: "./dual-slider.component.html",
	styleUrls: ["./dual-slider.component.scss"],
})
export class DualSliderComponent implements OnInit {
	@ViewChild("leftSlide", { static: true })
	leftSlide!: ElementRef<HTMLDivElement>;
	@ViewChild("rightSlide", { static: true })
	rightSlide!: ElementRef<HTMLDivElement>;

	constructor(private renderer: Renderer2) {}

	ngOnInit(): void {}

	onMouseLeave(slide: string): void {
		slide === "rightSlide" ? this.reduceRight() : this.reduceLeft();
	}

	reduceRight(): void {
		this.renderer.removeClass(
			this.rightSlide.nativeElement,
			"container--right-is-hovered"
		);
	}

	reduceLeft(): void {
		this.renderer.removeClass(
			this.leftSlide.nativeElement,
			"container--left-is-hovered"
		);
	}

	onMouseEnter(slide: string): void {
		slide === "rightSlide" ? this.increaseRight() : this.increaseLeft();
	}

	increaseRight(): void {
		this.renderer.addClass(
			this.rightSlide.nativeElement,
			"container--right-is-hovered"
		);
	}
	increaseLeft(): void {
		this.renderer.addClass(
			this.leftSlide.nativeElement,
			"container--left-is-hovered"
		);
	}
}
