import { createFeatureSelector, createSelector } from "@ngrx/store";
import { DeviceSizeState } from "./device-size.state";

export const deviceSizeSelector =
	createFeatureSelector<DeviceSizeState>("deviceSize");

export const selectFeatureCount = createSelector(
	deviceSizeSelector,
	(state: DeviceSizeState) => state.deviceSize
);
