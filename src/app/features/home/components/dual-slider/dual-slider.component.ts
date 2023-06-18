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
	@ViewChild("box", { static: true })
	box!: ElementRef<HTMLDivElement>;
	@ViewChild("leftHeading", { static: true })
	leftHeading!: ElementRef<HTMLDivElement>;
	@ViewChild("rightHeading", { static: true })
	rightHeading!: ElementRef<HTMLDivElement>;

	constructor(private renderer: Renderer2) {}

	ngOnInit(): void {}

	onMouseLeave(slide: string): void {
		slide === "right" ? this.reduceRight() : this.reduceLeft();
	}

	reduceRight(): void {
		this.renderer.removeClass(
			this.rightSlide.nativeElement,
			"box__one-half--right-is-hovered"
		);
		this.renderer.removeClass(
			this.leftSlide.nativeElement,
			"box__one-half--left-being-right-hovered"
		);
		this.renderer.removeClass(
			this.rightHeading.nativeElement,
			"box__heading--transitioned"
		);
	}

	reduceLeft(): void {
		this.renderer.removeClass(
			this.leftSlide.nativeElement,
			"box__one-half--left-is-hovered"
		);
		this.renderer.removeClass(
			this.rightSlide.nativeElement,
			"box__one-half--right-being-left-hovered"
		);
		this.renderer.removeClass(
			this.leftHeading.nativeElement,
			"box__heading--transitioned"
		);
	}

	onMouseEnter(slide: string): void {
		slide === "right" ? this.increaseRight() : this.increaseLeft();
	}

	increaseRight(): void {
		this.renderer.addClass(
			this.rightSlide.nativeElement,
			"box__one-half--right-is-hovered"
		);
		this.renderer.addClass(
			this.leftSlide.nativeElement,
			"box__one-half--left-being-right-hovered"
		);
		this.renderer.addClass(
			this.rightHeading.nativeElement,
			"box__heading--transitioned"
		);
	}

	increaseLeft(): void {
		this.renderer.addClass(
			this.leftSlide.nativeElement,
			"box__one-half--left-is-hovered"
		);
		this.renderer.addClass(
			this.rightSlide.nativeElement,
			"box__one-half--right-being-left-hovered"
		);
		this.renderer.addClass(
			this.leftHeading.nativeElement,
			"box__heading--transitioned"
		);
	}
}
