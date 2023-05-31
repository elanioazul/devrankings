import { SCREEN_SIZE } from "@core/enums/screen-size.enum";
import { BREAKPOINTS } from "@core/constants/breakpoints";

export interface DeviceSizeState {
	deviceSize: {
		category: string;
		innerWidth: string;
		innerHeight: string;
	};
}

export const initialState: DeviceSizeState = {
	deviceSize: {
		category: "",
		innerWidth: "",
		innerHeight: "",
	},
};
