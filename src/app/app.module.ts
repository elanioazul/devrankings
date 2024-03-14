import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { environment } from "@environment/environment.prod";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarModule } from "@shared/components";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { reducers, metaReducers } from "@core/store";
import { ScreenSizeService, ScrollwindowService } from "@core/services";
@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		StoreModule.forRoot(reducers, {
			metaReducers,
		}),
		StoreDevtoolsModule.instrument({
			maxAge: 25,
			logOnly: environment.production,
		}),
		NavbarModule,
		NgbModule,
	],
	providers: [ScreenSizeService, ScrollwindowService],
	bootstrap: [AppComponent],
})
export class AppModule {}
