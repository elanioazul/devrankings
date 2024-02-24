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
			import("./features/rankings/rankings.module").then(
				(m) => m.RankingsModule
			),
	},
	{
		path: "statistics",
		loadChildren: () =>
			import("./features/statistics/statistics.module").then(
				(m) => m.StatisticsModule
			),
	},
	{
		path: "profile",
		loadChildren: () =>
			import("./features/profile/profile.module").then((m) => m.ProfileModule),
	},
	// {
	//   path: '**',
	//   loadChildren: () =>
	//     import('./features/notFound/notFound.module').then(
	//       (m) => m.NotFoundModule
	//     ),
	// },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class DashboardRoutingModule {}
