import { Component } from "@angular/core";
import {
	faHouse,
	faPeopleGroup,
	faFolderOpen,
	faBars,
	faUserCircle,
	faMicrophoneLines,
} from "@fortawesome/free-solid-svg-icons";

@Component({
	selector: "app-navbar",
	templateUrl: "./navbar.component.html",
	styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent {
	faBars = faBars;
	faHouse = faHouse;
	faPeopleGroup = faPeopleGroup;
	faFolderOpen = faFolderOpen;
	faUserCircle = faUserCircle;
	faMicrophoneLines = faMicrophoneLines;
}
