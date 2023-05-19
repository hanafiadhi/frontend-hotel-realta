import { call, put } from "redux-saga/effects";
import { CreateBilOrder } from "@/src/api/resto/bil-order";
import {
  CreateMenuFailed,
  CreateMenuSuccess,
} from "../../action/resto/bilOrderAction";

function* handleCreateBilOrder(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(CreateBilOrder, payload);
    yield put(CreateMenuSuccess(result.data));
  } catch (error) {
    yield put(CreateMenuFailed(error));
  }
}

export { handleCreateBilOrder };
