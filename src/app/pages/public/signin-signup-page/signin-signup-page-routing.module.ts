import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SigninSignupPageComponent } from "./signin-signup-page.component";

const routes: Routes = [{ path: "", component: SigninSignupPageComponent }];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class SigninSignupPageRoutingModule {}
