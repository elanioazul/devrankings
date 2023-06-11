import { Injectable } from "@angular/core";
import { Observable, debounceTime, fromEvent, map, startWith } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class ScrollwindowService {
	constructor() {}

	public getScrollYWindoEvent(): Observable<any> {
		return fromEvent(window, "scroll").pipe(
			debounceTime(100),
			startWith(null),
			map(() => window.scrollY)
		);
	}
}
