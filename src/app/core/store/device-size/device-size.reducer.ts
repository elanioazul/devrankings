import { Action, createReducer, on } from "@ngrx/store";
import * as DeviceSizeActions from "./device-size.action";
import { initialState, DeviceSizeState } from "./device-size.state";

export const deviceSizeReducer = createReducer(
	initialState,
	on(DeviceSizeActions.setDeviceSize, (state, { deviceSize }) => {
		return { ...state, deviceSize };
	})
);

export function reducer(state: DeviceSizeState | undefined, action: Action) {
	return deviceSizeReducer(state, action);
}
