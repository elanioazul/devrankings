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
			import("./features/home/home.module").then((m) => m.HomeModule),
	},
	{
		path: "rankings",
		loadChildren: () =>
			import("./features/ranking/ranking.module").then((m) => m.RankingModule),
	},
	{
		path: "tablon",
		loadChildren: () =>
			import("./features/tablon/tablon.module").then((m) => m.TablonModule),
	},
	{
		path: "reglas",
		loadChildren: () =>
			import("./features/documents/documents.module").then(
				(m) => m.DocumentsModule
			),
	},
	{
		path: "login",
		loadChildren: () =>
			import("./features/signin/signin.module").then((m) => m.SigninModule),
	},
	{
		path: "**",
		loadChildren: () =>
			import("./features/notfound/notfound.module").then(
				(m) => m.NotfoundModule
			),
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
