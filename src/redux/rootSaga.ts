import { spawn } from "@redux-saga/core/effects";
// eslint-disable-next-line import/no-cycle
import { productsSaga } from "./reducers/products/saga";

export default function* rootSaga() {
	yield spawn(productsSaga);
}