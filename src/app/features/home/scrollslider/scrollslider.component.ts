import { DOCUMENT } from "@angular/common";
import {
	AfterViewInit,
	Component,
	ElementRef,
	HostListener,
	Inject,
	OnInit,
	ViewChild,
} from "@angular/core";
import gsap from "gsap";
@Component({
	selector: "app-scrollslider",
	templateUrl: "./scrollslider.component.html",
	styleUrls: ["./scrollslider.component.scss"],
})
export class ScrollsliderComponent implements OnInit, AfterViewInit {
	@HostListener("wheel", ["$event"])
	onMouseWheel(event: WheelEvent) {
		//this.slider.nativeElement.scrollLeft += event.deltaY;
		this.ScrollMeHorizontally(event.deltaY);
		event.preventDefault();
	}
	@ViewChild("slider") slider!: ElementRef<HTMLDivElement>;
	@ViewChild("slcontent") slcontent!: ElementRef<HTMLDivElement>;
	@ViewChild("slcompteur") slcompteur!: ElementRef<HTMLDivElement>;
	@ViewChild("slclient") slclient!: ElementRef<HTMLDivElement>;
	@ViewChild("slprojet") slprojet!: ElementRef<HTMLDivElement>;
	@ViewChild("sltype") sltype!: ElementRef<HTMLDivElement>;
	@ViewChild("more") more!: ElementRef<HTMLAnchorElement>;
	slides: ElementRef<HTMLDivElement>[] = [];
	ThisSl!: ElementRef["nativeElement"];
	AnimInProgress!: boolean;
	NumSl!: number;
	CurrSl = 1;
	Zindex = 100;
	vClients!: string;
	vProjets!: string;
	vType!: string;
	vCompteur!: string;
	vLeadZero!: string;
	ct = 0;

	VisOrigine!: string;
	VisOut!: string;

	constructor(
		@Inject(DOCUMENT) private _document: Document,
		private elem: ElementRef
	) {}

	ngOnInit(): void {}

	ngAfterViewInit(): void {
		setTimeout(() => {
			this.init();
		}, 300);
	}

	init() {
		this.AnimInProgress = false;
		Array.from(this.elem.nativeElement.querySelectorAll(".slide")).forEach(
			(slide: any) => {
				this.slides.push(slide);
			}
		);
		this.NumSl = this.slides.length;
		const slcompteur = this.slcompteur.nativeElement;
		const i = slcompteur.getElementsByTagName("i");
		this.affectInnerText(i[0], this.LeadingZero(this.NumSl - 1, 3));
		this.slideSetUp();

		const slclientDiv = this.slclient.nativeElement.children[0];
		slclientDiv.append(
			'<span>client</span> <span class="scroll">' + this.vClients + "</span>"
		);
		const slprojetDiv = this.slprojet.nativeElement.children[0];
		slprojetDiv.append(
			'<span>projet</span> <span class="scroll">' + this.vProjets + "</span>"
		);
		const sltypeDiv = this.slprojet.nativeElement.children[0];
		sltypeDiv.append(
			'<span>type</span> <span class="scroll">' + this.vType + "</span>"
		);

		const slcompteur1 = this.slcompteur.nativeElement.querySelectorAll(
			"b>span:nth-child(2),b>span:nth-child(1)"
		);
		Array.from(slcompteur1).forEach((ele: any) => {
			this.affectInnerHtml(ele, this.vLeadZero);
		});
		const slcompteur2 = this.slcompteur.nativeElement.querySelectorAll(
			"b>span:nth-child(3)"
		);
		Array.from(slcompteur2).forEach((ele: any) => {
			this.affectInnerHtml(ele, this.vLeadZero);
		});

		this.more.nativeElement.classList.add("hide");
		this.Jump2Slide(1);
	}

	affectInnerText(elem: HTMLElement, particle: string): void {
		elem.innerText = particle;
	}
	affectInnerHtml(elem: HTMLElement, particle: string): void {
		elem.innerHTML = particle;
	}

	slideSetUp(): void {
		this.vClients =
			this.vProjets =
			this.vType =
			this.vCompteur =
			this.vLeadZero =
				"";
		this.slides.forEach((slide: any) => {
			const s = slide.getElementsByTagName("strong")[0];
			const h1 = slide.getElementsByTagName("h1")[0];
			const b = slide.getElementsByTagName("b")[0];
			this.vClients = this.vClients + s.innerText + "<br>";
			this.vProjets = this.vProjets + h1.innerText + "<br>";
			this.vType = this.vType + b.innerText + "<br>";
			this.vLeadZero = this.vLeadZero + "0<br>";
			this.vCompteur = this.vCompteur + this.ct + "0<br>";
			this.ct = this.ct + 1;
		});
	}

	LeadingZero(number: any, width: number): string {
		width -= number.toString().length;
		if (width > 0) {
			return new Array(width + (/\./.test(number) ? 2 : 1)).join("0") + number;
		}
		return number + "";
	}

	ScrollMeHorizontally(direction: any): void {
		if (this.AnimInProgress == false) {
			if (direction > 0) {
				this.AnimInProgress = true;
				this.ThisSl = this.slides[this.CurrSl];
				if (this.CurrSl < this.NumSl) {
					this.CurrSl += 1;
				} else if (this.CurrSl == this.NumSl) {
					this.CurrSl = 1;
				}
				this.VisOrigine = "100px";
				this.VisOut = "-100px";
			} else if (direction < 0 && this.CurrSl > 1) {
				this.AnimInProgress = true;
				this.ThisSl = this.slides[this.CurrSl];
				this.CurrSl -= 1;
				this.VisOrigine = "-100px";
				this.VisOut = "100px";
			} else {
				this.AnimInProgress = false;
				return;
			}
			this.Zindex += 1;
			this.SwitchSlider();
		}
	}

	Jump2Slide(slide: number): void {
		if (this.AnimInProgress == false) {
			this.AnimInProgress = true;
			this.ThisSl = this.slides[this.CurrSl];
			if (this.CurrSl > slide) {
				this.VisOrigine = "-100px";
				this.VisOut = "100px";
			} else {
				this.VisOrigine = "100px";
				this.VisOut = "-100px";
			}
			this.CurrSl = slide + 1;
			this.Zindex += 1;
			this.SwitchSlider();
		}
	}

	SwitchSlider(): void {
		this.more.nativeElement.classList.add("hide");
		const SlCible = this.slides[this.CurrSl];
		SlCible.nativeElement.style.setProperty("zIndex", this.Zindex.toString());
		this.slcontent.nativeElement.style.setProperty(
			"zIndex",
			(this.Zindex + 20).toString()
		);
		const CibleScrollLine = (this.CurrSl - 1) * 18;
		const CibleScrollCompteur = (this.CurrSl - 1) * 180;
		if (this.CurrSl == 1) {
			gsap.to(this.slcontent, 0.5, {
				y: "50px",
				opacity: 0,
				ease: Power4.easeOut,
			}); //Oculta filas y contador
		} else {
			gsap.to(this.slcontent, {
				y: "0px",
				opacity: 1,
				ease: Power4.easeOut,
				stagger: 0.05,
			}); //Mostrar líneas y contador
		}

		gsap.fromTo(
			this.ThisSl.nativeElement.getElementsByClassName(".vis"),
			{ y: "0px", ease: Power4.easeOut },
			{ y: this.VisOut }
		);
		gsap.fromTo(
			SlCible.nativeElement.getElementsByClassName(".vis"),
			{ y: this.VisOrigine, ease: Power4.easeOut },
			{ y: this.VisOut }
		);
		gsap.to(this.ThisSl.nativeElement.getElementsByClassName(".scroll"), {
			scrollTo: { y: CibleScrollLine, x: 0 },
			ease: Expo.easeOut,
			stagger: 0.1,
		});
		gsap.to(
			this.ThisSl.nativeElement
				.getElementsByClassName(".slcompteur")
				.querySelectorAll("b>span:nth-child(0)"),
			{
				scrollTo: { y: CibleScrollCompteur, x: 0 },
				ease: Expo.easeOut,
				stagger: 0.1,
			}
		);
		gsap.to(SlCible, {
			width: "100%",
			onComplete: () => {
				if (SlCible.nativeElement.getElementsByTagName("a").length) {
					const anchors: any[] = [];
					Array.from(SlCible.nativeElement.getElementsByTagName("a")).forEach(
						(elem: any) => {
							anchors.push(elem);
						}
					);
					this.more.nativeElement.setAttribute(
						"href",
						anchors[0].getAttribute("href")
					);
					this.more.nativeElement.classList.remove("hide");
				} //ocultar el + si no hay enlace
				this.slides.forEach((element: any, index) => {
					if (index !== this.CurrSl) {
						element.nativeElement.style.setProperty("width", "0%");
					}
				});
				this.AnimInProgress = false;
			},
		});
	}
}
