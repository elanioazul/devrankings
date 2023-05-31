import { createAction, props } from "@ngrx/store";

export const setDeviceSize = createAction(
	"[Device Size] set device size",
	props<{
		deviceSize: {
			category: string;
			innerWidth: string;
			innerHeight: string;
		};
	}>()
);
