import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FooterComponent } from "./footer.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { LogoInmotionModule } from "./../logo-inmotion/logo-inmotion.module";
import { LogoModule } from "../logo";
@NgModule({
	declarations: [FooterComponent],
	imports: [CommonModule, FontAwesomeModule, LogoInmotionModule, LogoModule],
	exports: [FooterComponent],
})
export class FooterModule {}
