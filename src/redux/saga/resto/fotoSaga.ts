import { call, put } from "redux-saga/effects";
import {
  DeleteFotoMenuResto,
  GetDataMenuRestoFoto,
  UpdateFotoMenuResto,
  UploadFotoMenuResto,
} from "@/src/api/resto/foto-menu-resto";
import {
  DeleteFotoMenuFailed,
  DeleteFotoMenuSuccess,
  GetFotoMenuFailed,
  GetFotoMenuSuccess,
  UpdateFotoMenuFailed,
  UpdateFotoMenuSuccess,
  UploadFotoMenuFailed,
  UploadFotoMenuSuccess,
} from "../../action/resto/fotoAction";

function* handleUploadFotoMenuResto(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(UploadFotoMenuResto, payload);
    yield put(UploadFotoMenuSuccess(result.data));
  } catch (error) {
    yield put(UploadFotoMenuFailed(error));
  }
}

function* handleUpdateFotoMenuResto(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(UpdateFotoMenuResto, payload);
    yield put(UpdateFotoMenuSuccess(result.data));
  } catch (error) {
    yield put(UpdateFotoMenuFailed(error));
  }
}

function* handleFotoMenu(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(GetDataMenuRestoFoto, payload);
    yield put(GetFotoMenuSuccess(result.data));
  } catch (error) {
    yield put(GetFotoMenuFailed(error));
  }
}
function* handleDeleteFotoMenu(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(DeleteFotoMenuResto, payload);
    yield put(DeleteFotoMenuSuccess(result.data));
  } catch (error) {
    yield put(DeleteFotoMenuFailed(error));
  }
}

export {
  handleUploadFotoMenuResto,
  handleUpdateFotoMenuResto,
  handleFotoMenu,
  handleDeleteFotoMenu,
};
