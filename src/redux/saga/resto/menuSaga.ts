import { call, put } from "redux-saga/effects";
import {
  CreateMenuResto,
  GetAllMenuResto,
  UpdateMenuResto,
  DeleteMenuResto,
} from "@/src/api/resto/resto-menu";

import {
  GetMenuSuccess,
  GetMenuFailed,
  GetOneMenuSuccess,
  GetOneMenuFailed,
  CreateMenuSuccess,
  CreateMenuFailed,
  UpdateMenuSuccess,
  UpdateMenuFailed,
  DeleteMenuSuccess,
  DeleteMenuFailed,
} from "../../action/resto/restoMenuAction";

function* handleMenu(): any {
  try {
    const result = yield call(GetAllMenuResto);
    yield put(GetMenuSuccess(result));
  } catch (error) {
    yield put(GetMenuFailed(error));
  }
}
function* handleOneMenu(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(GetAllMenuResto, payload);
    yield put(GetOneMenuSuccess(result.data));
  } catch (error) {
    yield put(GetOneMenuFailed(error));
  }
}

function* handleCreateMenu(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(CreateMenuResto, payload);
    yield put(CreateMenuSuccess(result.data));
  } catch (error) {
    yield put(CreateMenuFailed(error));
  }
}

function* handleUpdateMenu(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(UpdateMenuResto, payload);
    yield put(UpdateMenuSuccess(result.data));
  } catch (error) {
    yield put(UpdateMenuFailed(error));
  }
}
function* handleDeleteeMenu(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(DeleteMenuResto, payload);
    yield put(DeleteMenuSuccess(result.data));
  } catch (error) {
    yield put(DeleteMenuFailed(error));
  }
}

export {
  handleMenu,
  handleOneMenu,
  handleCreateMenu,
  handleUpdateMenu,
  handleDeleteeMenu,
};
