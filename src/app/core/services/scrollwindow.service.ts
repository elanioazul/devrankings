import { Inject, Injectable } from "@angular/core";
import {
	Observable,
	debounceTime,
	fromEvent,
	map,
	startWith,
	switchMap,
} from "rxjs";
import { DOCUMENT } from "@angular/common";
@Injectable({
	providedIn: "root",
})
export class ScrollwindowService {
	constructor(@Inject(DOCUMENT) private _document: Document) {}

	public getScrollYWindoEvent(): Observable<any> {
		return fromEvent(window, "scroll").pipe(
			debounceTime(100),
			startWith(null),
			map(() => window.scrollY)
		);
	}
	public getMaxScroll(): Observable<any> {
		return fromEvent(window, "scroll").pipe(
			debounceTime(100),
			startWith(null),
			map(() => this._document.documentElement.scrollHeight)
		);
	}
	public getScrollPosition(): Observable<any> {
		return fromEvent(window, "scroll").pipe(
			debounceTime(100),
			startWith(null),
			map(
				() =>
					this._document.documentElement.scrollTop +
					this._document.documentElement.offsetHeight
			)
		);
	}

	public isScrollAtBottom(): Observable<boolean> {
		return this.getMaxScroll().pipe(
			switchMap((maxScroll) =>
				this.getScrollPosition().pipe(
					map((scrollPosition) => scrollPosition >= maxScroll)
				)
			)
		);
	}
}
