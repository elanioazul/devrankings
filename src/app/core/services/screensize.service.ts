import { Injectable } from "@angular/core";
import { setDeviceSize } from "@core/store/device-size/device-size.action";
import { fromEvent, Observable } from "rxjs";
import { debounceTime, map, startWith } from "rxjs/operators";
import { SCREEN_SIZE } from "@core/enums/screen-size.enum";
import { BREAKPOINTS } from "@core/constants/breakpoints";
import { IDeviceSize } from "@core/interfaces/device-size";
@Injectable({
	providedIn: "root",
})
export class ScreenSizeService {
	store: any;
	constructor() {}

	public getScreenSizeWhenLoaded(): Observable<IDeviceSize> {
		return fromEvent(window, "load").pipe(
			debounceTime(200),
			startWith(null),
			map(() => this.setDeviceSize(this.calculateScreenSize()))
		);
	}

	public getScreenSizeWhenResizing(): Observable<IDeviceSize> {
		return fromEvent(window, "resize").pipe(
			debounceTime(200),
			startWith(null),
			map(() => this.setDeviceSize(this.calculateScreenSize()))
		);
	}

	private calculateScreenSize(): IDeviceSize {
		const screenWidth = window.innerWidth;
		const screenHeight = window.innerHeight;
		if (screenWidth < 576) {
			return {
				deviceSize: {
					category: SCREEN_SIZE.Mobile,
					innerWidth: screenWidth + "px",
					innerHeight: screenHeight + "px",
				},
			};
		} else if (screenWidth < 768) {
			return {
				deviceSize: {
					category: SCREEN_SIZE.Tablet,
					innerWidth: screenWidth + "px",
					innerHeight: screenHeight + "px",
				},
			};
		} else if (screenWidth < 992) {
			return {
				deviceSize: {
					category: SCREEN_SIZE.Desktop,
					innerWidth: screenWidth + "px",
					innerHeight: screenHeight + "px",
				},
			};
		} else if (screenWidth < 1200) {
			return {
				deviceSize: {
					category: SCREEN_SIZE.Desktop,
					innerWidth: screenWidth + "px",
					innerHeight: screenHeight + "px",
				},
			};
		} else {
			return {
				deviceSize: {
					category: SCREEN_SIZE.BigDesktop,
					innerWidth: screenWidth + "px",
					innerHeight: screenHeight + "px",
				},
			};
		}
	}

	private setDeviceSize(screenProps: any): any {
		this.store.dispatch(setDeviceSize({ deviceSize: screenProps }));
	}
}
