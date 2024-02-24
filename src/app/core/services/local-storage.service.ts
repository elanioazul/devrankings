import { Injectable, InjectionToken, PLATFORM_ID, inject } from "@angular/core";

export const LOCAL_STORAGE = new InjectionToken<Storage>(
	"window local storage object",
	{
		providedIn: "root",
		factory: () => {
			return inject(PLATFORM_ID) === "browser"
				? window.localStorage
				: ({} as Storage);
		},
	}
);

@Injectable({
	providedIn: "root",
})
export class LocalStorageService {
	storage = inject(LOCAL_STORAGE);

	constructor() {}

	saveChecklists(checklists: any[]) {
		//this.storage.setItem('checklists', JSON.stringify(checklists));
	}

	saveChecklistItems(checklistItems: any[]) {
		//this.storage.setItem('checklistItems', JSON.stringify(checklistItems));
	}
}
