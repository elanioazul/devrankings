import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { authGuard } from "@core/guards/auth.guard";

const routes: Routes = [
	{
		path: "",
		redirectTo: "/inicio",
		pathMatch: "full",
	},
	{
		path: "inicio",
		loadChildren: () =>
			import("./pages/public/landing-page/landing-page.module").then(
				(m) => m.LandingPageModule
			),
	},
	{
		path: "rankings",
		loadChildren: () =>
			import("./pages/public/rankings-page/rankings-page.module").then(
				(m) => m.RankingsPageModule
			),
	},
	{
		path: "tablon",
		loadChildren: () =>
			import("./pages/public/tablon-page/tablon-page.module").then(
				(m) => m.TablonPageModule
			),
	},
	{
		path: "reglas",
		loadChildren: () =>
			import("./pages/public/reglas-page/reglas-page.module").then(
				(m) => m.ReglasPageModule
			),
	},
	{
		path: "signup",
		loadChildren: () =>
			import("./pages/public/signup-page/signup-page.module").then(
				(m) => m.SignupPageModule
			),
	},
	{
		path: "signin",
		loadChildren: () =>
			import("./pages/public/signin-page/signin-page.module").then(
				(m) => m.SigninPageModule
			),
	},
	{
		path: "dashboard",
		loadChildren: () =>
			import("./pages/private/dashboard-page/dashboard-page.module").then(
				(m) => m.DashboardPageModule
			),
		canActivate: [authGuard],
	},
	{
		path: "**",
		loadChildren: () =>
			import("./pages/notfound-page/notfound-page.module").then(
				(m) => m.NotfoundPageModule
			),
	},
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { useHash: true, enableTracing: true }),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
