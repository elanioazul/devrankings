import {
	AfterViewInit,
	Component,
	ElementRef,
	OnInit,
	ViewChild,
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

	activeTab!: HTMLLIElement | null;

	eeee!: any;

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

	constructor(@Inject(DOCUMENT) private _document: Document) {}

	ngOnInit(): void {}

	ngAfterViewInit(): void {
		setTimeout(() => {
			this.test();
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
		this.test();
	}
}
