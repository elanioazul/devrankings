import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { State } from "./core.state";
import * as DeviceSizeReducer from "./device-size/device-size.reducer";

export const reducers: ActionReducerMap<State> = {
	deviceSize: DeviceSizeReducer.reducer,
};

export const metaReducers: MetaReducer<State>[] = [];
