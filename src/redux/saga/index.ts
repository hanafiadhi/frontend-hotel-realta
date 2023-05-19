import { takeEvery, all } from "redux-saga/effects";

import * as ActionMenu from "../constant/resto/restoMenuConstant";
import * as ActionFotoMenu from "../constant/resto/fotoConstant";
import * as ActionBilOrder from "../constant/resto/bilOrderConstant";

//import saga

import {
  handleUploadFotoMenuResto,
  handleUpdateFotoMenuResto,
  handleFotoMenu,
  handleDeleteFotoMenu,
} from "./resto/fotoSaga";
import {
  handleMenu,
  handleOneMenu,
  handleCreateMenu,
  handleUpdateMenu,
  handleDeleteeMenu,
} from "./resto/menuSaga";
import { handleCreateBilOrder } from "./resto/bilOrderSaga";

function* watchAll() {
  yield all([
    takeEvery(ActionMenu.GET_MENU_REQUEST, handleMenu),
    takeEvery(ActionMenu.GET_ONE_MENU_REQUEST, handleOneMenu),
    takeEvery(ActionMenu.CREATE_MENU_REQUEST, handleCreateMenu),
    takeEvery(ActionMenu.UPDATE_MENU_REQUEST, handleUpdateMenu),
    takeEvery(ActionMenu.DELETE_MENU_REQUEST, handleDeleteeMenu),

    takeEvery(ActionFotoMenu.GET_FOTO_MENU_REQUEST, handleFotoMenu),
    takeEvery(
      ActionFotoMenu.UPDATE_FOTO_MENU_REQUEST,
      handleUpdateFotoMenuResto
    ),
    takeEvery(
      ActionFotoMenu.UPLOAD_FOTO_MENU_REQUEST,
      handleUploadFotoMenuResto
    ),
    takeEvery(ActionFotoMenu.DELETE_FOTO_MENU_REQUEST, handleDeleteFotoMenu),

    takeEvery(ActionBilOrder.CREATE_BIL_ORDER_REQUEST, handleCreateBilOrder),
  ]);
}
export default watchAll;
