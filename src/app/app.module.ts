import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarModule } from "./shared";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, AppRoutingModule, NavbarModule, NgbModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
