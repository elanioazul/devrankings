import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarModule } from "./shared";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { LogoInmotionComponent } from "./shared/components/logo-inmotion/logo-inmotion.component";
//import { environment } from 'src/environments/environment';
//import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
@NgModule({
	declarations: [AppComponent, LogoInmotionComponent],
	imports: [BrowserModule, AppRoutingModule, NavbarModule, NgbModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
