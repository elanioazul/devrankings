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
import { Inject } from "@angular/core";
import { DOCUMENT } from "@angular/common";

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

	constructor(@Inject(DOCUMENT) private _document: Document) {}

	ngOnInit(): void {}

	ngAfterViewInit(): void {
		setTimeout(() => {
			this.test();
		});
	}

	test(): void {
		this.activeTab = this._document.querySelector(".active");
		const activeWidthNewAnimHeight = this.activeTab?.clientHeight;
		const activeWidthNewAnimWidth = this.activeTab?.clientWidth;
		const itemPosNewAnimTop = this.activeTab?.clientTop;
		const itemPosNewAnimLeft = this.activeTab?.clientLeft;
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
		const activeWidthNewAnimHeight = parentElement.offserHeight;
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
		console.log(event.target.innerWidth);
		setTimeout(() => {
			this.test();
		}, 500);
	}
}
