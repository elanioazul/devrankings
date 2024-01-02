import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
	{
		path: "",
		redirectTo: "/home",
		pathMatch: "full",
	},
	{
		path: "home",
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
		path: "**",
		loadChildren: () =>
			import("./pages/notfound-page/notfound-page.module").then(
				(m) => m.NotfoundPageModule
			),
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
