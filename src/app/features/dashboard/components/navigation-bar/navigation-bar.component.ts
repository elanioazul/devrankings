import { Component, computed, inject } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "@core/services/auth.service";
import {
	faUser,
	faBars,
	faWindowClose,
	faPeopleGroup,
	faBarChart,
	faHouse,
	faRankingStar,
} from "@fortawesome/free-solid-svg-icons";
import { INavBarMenuLinkProps } from "@shared/interfaces/navbar-menu-links.interfaz";
@Component({
	selector: "app-navigation-bar",
	templateUrl: "./navigation-bar.component.html",
	styleUrls: ["./navigation-bar.component.scss"],
})
export class NavigationBarComponent {
	router = inject(Router);
	authService = inject(AuthService);

	faUser = faUser;
	faHouse = faHouse;
	faBars = faBars;
	faRankingStar = faRankingStar;
	faPeopleGroup = faPeopleGroup;
	faWindowClose = faWindowClose;
	faBarChart = faBarChart;
	isNavBarVisible = true;
	recognizedUser = computed(() => this.authService.isLoggedIn());
	user = computed(() => this.authService.user());

	navOptions: INavBarMenuLinkProps[] = [
		{ to: "/home", label: "Home", icon: faHouse, isDefault: true },
		{
			to: "/rankings",
			label: "Rankings",
			icon: faRankingStar,
			isDefault: false,
		},
		{
			to: "/statistics",
			label: "Estadísticas",
			icon: faBarChart,
			isDefault: false,
		},
		{
			to: "/profile",
			label: "Perfil",
			icon: faUser,
			isDefault: false,
		},
	];

	toggleNavBar() {
		this.isNavBarVisible = !this.isNavBarVisible;
	}

	logout(): void {
		this.authService.logout();
		this.router.navigate(["/signin"]);
	}
}
