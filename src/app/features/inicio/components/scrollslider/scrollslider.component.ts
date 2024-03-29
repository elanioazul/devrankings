import { DOCUMENT } from "@angular/common";
import {
	AfterViewInit,
	Component,
	ElementRef,
	HostListener,
	Inject,
	OnInit,
	ViewChild,
	ViewEncapsulation,
} from "@angular/core";
import { gsap, Power4, Expo, TweenMax } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
@Component({
	selector: "app-scrollslider",
	templateUrl: "./scrollslider.component.html",
	styleUrls: ["./scrollslider.component.scss"],
	encapsulation: ViewEncapsulation.None,
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
	slides: HTMLDivElement[] = [];
	ThisSl!: HTMLDivElement;
	AnimInProgress!: boolean;
	NumSl!: number;
	CurrSl!: number;
	Zindex!: number;
	vClients!: string;
	vProjets!: string;
	vType!: string;
	vCompteur!: string;
	vLeadZero!: string;
	ct!: number;

	VisOrigine!: string;
	VisOut!: string;

	constructor(
		@Inject(DOCUMENT) private _document: Document,
		private elem: ElementRef
	) {}

	ngOnInit(): void {
		gsap.registerPlugin(ScrollToPlugin);
	}

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
		this.CurrSl = 1;
		this.Zindex = 100;
		this.vClients =
			this.vProjets =
			this.vType =
			this.vCompteur =
			this.vLeadZero =
				"";
		this.ct = 0;

		this.findDataInTemplate();
		this.setContent();

		this.more.nativeElement.classList.add("hide");
		this.Jump2Slide(1);
	}

	affectInnerText(elem: HTMLElement, particle: string): void {
		elem.innerText = particle;
	}
	affectInnerHtml(elem: HTMLElement, particle: string): void {
		elem.innerHTML = particle;
	}

	findDataInTemplate(): void {
		this.slides.forEach((slide: any) => {
			const s = slide.getElementsByTagName("strong")[0];
			const h1 = slide.getElementsByTagName("h1")[0];
			const b = slide.getElementsByTagName("b")[0];
			this.vClients = this.vClients + s.innerText + "<br>";
			this.vProjets = this.vProjets + h1.innerText + "<br>";
			this.vType = this.vType + b.innerText + "<br>";
			this.vLeadZero = this.vLeadZero + "0<br>";
			this.vCompteur = this.vCompteur + this.ct + "<br>";
			this.ct = this.ct + 1;
		});
	}

	setContent(): void {
		const slclientDiv = this.slclient.nativeElement.children[0];
		this.affectInnerHtml(
			slclientDiv as HTMLElement,
			'<span>Adéntrate</span> <span class="scroll">' + this.vClients + "</span>"
		);
		const slprojetDiv = this.slprojet.nativeElement.children[0];
		this.affectInnerHtml(
			slprojetDiv as HTMLElement,
			'<span>Disfruta</span> <span class="scroll">' + this.vProjets + "</span>"
		);
		const sltypeDiv = this.sltype.nativeElement.children[0];
		this.affectInnerHtml(
			sltypeDiv as HTMLElement,
			'<span>Promueve</span> <span class="scroll">' + this.vType + "</span>"
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
			this.affectInnerHtml(ele, this.vCompteur);
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
		const SlCible = this.slides[this.CurrSl - 1] as HTMLDivElement;
		SlCible.style.zIndex = this.Zindex.toString();
		this.slcontent.nativeElement.style.zIndex = (this.Zindex + 20).toString();
		const CibleScrollLine = (this.CurrSl - 1) * 18;
		const CibleScrollCompteur = (this.CurrSl - 1) * 180;

		const divs = [];
		divs.push(this.slcontent.nativeElement.children[0]);
		divs.push(this.slcontent.nativeElement.children[1]);
		divs.push(this.slcontent.nativeElement.children[2]);
		divs.push(this.slcontent.nativeElement.children[3]);
		divs.push(this.slcontent.nativeElement.children[4]);
		if (this.CurrSl == 1) {
			gsap.to(divs, {
				duration: 0.5,
				y: "50px",
				opacity: 0,
				ease: "power4.out",
			}); //Oculta filas y contador
		} else {
			gsap.to(divs, {
				duration: 1,
				y: "0px",
				opacity: 1,
				ease: "power4.out",
				stagger: 0.05,
			}); //Mostrar líneas y contador
		}

		gsap.fromTo(
			SlCible.children[0].childNodes[0],
			{
				duration: 1,
				y: "0px",
				ease: "power4.out",
			},
			{
				duration: 1,
				y: this.VisOut,
			}
		); //máscara antigua visual
		gsap.fromTo(
			SlCible.children[0].childNodes[0],
			{
				duration: 1,
				y: this.VisOrigine,
				ease: "power4.out",
			},
			{
				duration: 1,
				y: "0px",
			}
		); //póster nuevo visual
		gsap.to(this.slcontent.nativeElement.querySelectorAll(".scroll"), {
			duration: 0.6,
			scrollTo: { y: CibleScrollLine, x: 0 },
			ease: "expo.out",
			stagger: 0.1,
		}); //desplazar las líneas
		gsap.to(this.slcompteur.nativeElement.querySelectorAll("span"), {
			duration: 0.6,
			scrollTo: { y: CibleScrollCompteur, x: 0 },
			ease: "expo.out",
			stagger: 0.1,
		}); //desplazar el contador
		//panel de cambio
		gsap.to(SlCible, {
			duration: 1.1,
			width: "100%",
			onComplete: () => {
				if (SlCible.getElementsByTagName("a").length) {
					const anchors: any[] = [];
					Array.from(SlCible.getElementsByTagName("a")).forEach((elem: any) => {
						anchors.push(elem);
					});
					this.more.nativeElement.setAttribute(
						"href",
						anchors[0].getAttribute("href")
					);
					this.more.nativeElement.classList.remove("hide");
				} //ocultar el + si no hay enlace
				this.slides.forEach((element: any, index) => {
					if (index == this.CurrSl) {
						element.children[0].style.setProperty("width", "100%");
					}
				});
				this.AnimInProgress = false;
			},
		});
	}
}
