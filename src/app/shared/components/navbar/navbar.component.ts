import {
	AfterViewInit,
	Component,
	ElementRef,
	OnInit,
	ViewChild,
	Renderer2,
} from "@angular/core";
import {
	faHouse,
	faPeopleGroup,
	faFolderOpen,
	faBars,
	faUserCircle,
	faMicrophoneLines,
} from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { Inject } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { ScrollwindowService } from "@core/services";
import { Subject, takeUntil } from "rxjs";

export interface INavBarMenuLinkProps {
	to: string;
	icon: IconDefinition;
	label: string;
	isDefault: boolean;
}
@Component({
	selector: "app-navbar",
	templateUrl: "./navbar.component.html",
	styleUrls: ["./navbar.component.scss"],
	host: {
		"(window:resize)": "onResize($event)",
	},
})
export class NavbarComponent implements OnInit, AfterViewInit {
	faBars = faBars;
	faHouse = faHouse;
	faPeopleGroup = faPeopleGroup;
	faFolderOpen = faFolderOpen;
	faUserCircle = faUserCircle;
	faMicrophoneLines = faMicrophoneLines;

	@ViewChild("navbarSupportedContent")
	navbarSupportedContent!: ElementRef<HTMLDivElement>;
	@ViewChild("horiSelector") horiSelector!: ElementRef<HTMLDivElement>;
	@ViewChild("unsortedList") unsortedList!: ElementRef<HTMLUListElement>;

	autonav!: HTMLElement | null;

	activeTab!: HTMLLIElement | null;

	private unSubscribe = new Subject<void>();

	navOptions: INavBarMenuLinkProps[] = [
		{ to: "/home", label: "Home", icon: faHouse, isDefault: true },
		{
			to: "/rankings",
			label: "Rankings",
			icon: faPeopleGroup,
			isDefault: false,
		},
		{
			to: "/tablon",
			label: "Tablon",
			icon: faMicrophoneLines,
			isDefault: false,
		},
		{ to: "/reglas", label: "Reglas", icon: faFolderOpen, isDefault: false },
		{ to: "/login", label: "Login", icon: faUserCircle, isDefault: false },
	];

	constructor(
		@Inject(DOCUMENT) private _document: Document,
		private scrollService: ScrollwindowService,
		private renderer: Renderer2
	) {}

	ngOnInit(): void {}

	ngAfterViewInit(): void {
		setTimeout(() => {
			this.test();
		}, 300);
		this.navbarHideControl();
	}

	ngOnDestroy() {
		this.unSubscribe.next();
		this.unSubscribe.complete();
	}

	navbarHideControl(): void {
		this.autonav = this._document.querySelector(".autohideNav");
		let autonavHeight = this.autonav?.offsetHeight;

		let last_scroll_top = 0;
		this.scrollService
			.getScrollYWindoEvent()
			.pipe(takeUntil(this.unSubscribe))
			.subscribe((data: any) => {
				if (autonavHeight && data > autonavHeight && this.autonav) {
					if (data < last_scroll_top && data) {
						this.renderer.removeClass(this.autonav, "scrolled-down");
						this.renderer.addClass(this.autonav, "scrolled-up");
						this.navbarSupportedContent.nativeElement.classList.contains(
							"opened"
						)
							? this.closeMenu()
							: null;
					} else {
						this.renderer.removeClass(this.autonav, "scrolled-up");
						this.renderer.addClass(this.autonav, "scrolled-down");
					}
					last_scroll_top = data;
				}
			});
	}

	test(): void {
		this.activeTab = this._document.querySelector(".active");
		const activeWidthNewAnimHeight = this.activeTab?.offsetHeight;
		const activeWidthNewAnimWidth = this.activeTab?.offsetWidth;
		const itemPosNewAnimTop = this.activeTab?.offsetTop;
		const itemPosNewAnimLeft = this.activeTab?.offsetLeft;
		this.setHoriSelectorPosition(
			itemPosNewAnimTop,
			itemPosNewAnimLeft,
			activeWidthNewAnimHeight,
			activeWidthNewAnimWidth
		);
	}

	setHoriSelectorPosition(top: any, left: any, height: any, width: any): void {
		this.horiSelector.nativeElement.style.top = top + "px";
		this.horiSelector.nativeElement.style.left = left + "px";
		this.horiSelector.nativeElement.style.height = height + "px";
		this.horiSelector.nativeElement.style.width = width + "px";
	}

	setNewActiveTab(e: any): void {
		this.removeCurrentActiveClass(e.currentTarget.children);
		const parentElement = e.target.parentElement;
		parentElement.classList.add("active");
		const activeWidthNewAnimHeight = parentElement.offsetHeight;
		const activeWidthNewAnimWidth = parentElement.offsetWidth;
		const itemPosNewAnimTop = parentElement.offsetTop;
		const itemPosNewAnimLeft = parentElement.offsetLeft;
		this.setHoriSelectorPosition(
			itemPosNewAnimTop,
			itemPosNewAnimLeft,
			activeWidthNewAnimHeight,
			activeWidthNewAnimWidth
		);
	}

	removeCurrentActiveClass(nodes: HTMLCollection): void {
		for (let i = 0; i < nodes.length; i++) {
			nodes[i].classList.contains("active")
				? nodes[i].classList.remove("active")
				: null;
		}
	}

	onResize(event: any) {
		if (event.target.innerWidth > 991) {
			this.ensureTightNavbar();
		}
		this.test();
	}

	ensureTightNavbar(): void {
		const isNavbarOpened = this._document.querySelector(".opened");
		if (isNavbarOpened) {
			this.navbarSupportedContent.nativeElement.classList.remove("opened");
			this.navbarSupportedContent.nativeElement.style.height = "";
			this.navbarSupportedContent.nativeElement.style.display = "";
			this.navbarSupportedContent.nativeElement.style.flexDirection = "";
			this.navbarSupportedContent.nativeElement.style.setProperty(
				"align-items",
				"flex-end"
			);
			this.unsortedList.nativeElement.style.width = "";
		} else {
			return;
		}
	}

	toggleMenu(event: any): void {
		if (
			!this.navbarSupportedContent.nativeElement.classList.contains("opened")
		) {
			this.navbarSupportedContent.nativeElement.classList.add("opened");
			this.navbarSupportedContent.nativeElement.style.height = "auto";
			this.navbarSupportedContent.nativeElement.style.display = "flex";
			this.navbarSupportedContent.nativeElement.style.flexDirection = "column";
			this.navbarSupportedContent.nativeElement.style.setProperty(
				"align-items",
				"flex-start"
			);

			let height =
				this.navbarSupportedContent.nativeElement.offsetHeight + "px";

			this.navbarSupportedContent.nativeElement.style.height = "0px";

			setTimeout(() => {
				this.navbarSupportedContent.nativeElement.style.height = height;
				this.unsortedList.nativeElement.style.width = "100%";
			}, 0);
		} else {
			this.closeMenu();
		}
		setTimeout(() => {
			this.test();
		}, 300);
	}

	closeMenu(): void {
		this.navbarSupportedContent.nativeElement.style.height = "0px";

		this.navbarSupportedContent.nativeElement.addEventListener(
			"transitionend",
			() => {
				this.navbarSupportedContent.nativeElement.classList.remove("opened");
			},
			{
				once: true,
			}
		);
	}
}
