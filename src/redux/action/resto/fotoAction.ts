import * as ActionFoto from "../../constant/resto/fotoConstant";

export const UpdateFotoMenuRequest = (payload: any) => ({
  type: ActionFoto.UPDATE_FOTO_MENU_REQUEST,
  payload,
});
export const UpdateFotoMenuSuccess = (payload: any) => ({
  type: ActionFoto.UPDATE_FOTO_MENU_SUCCESS,
  payload,
});
export const UpdateFotoMenuFailed = (payload: any) => ({
  type: ActionFoto.UPLOAD_FOTO_MENU_FAILED,
  payload,
});

export const UploadFotoMenuRequest = (payload: any) => ({
  type: ActionFoto.UPLOAD_FOTO_MENU_REQUEST,
  payload,
});
export const UploadFotoMenuSuccess = (payload: any) => ({
  type: ActionFoto.UPLOAD_FOTO_MENU_SUCCESS,
  payload,
});
export const UploadFotoMenuFailed = (payload: any) => ({
  type: ActionFoto.UPLOAD_FOTO_MENU_FAILED,
  payload,
});

export const GetFotoMenuRequest = (payload: any) => ({
  type: ActionFoto.GET_FOTO_MENU_REQUEST,
  payload,
});
export const GetFotoMenuSuccess = (payload: any) => ({
  type: ActionFoto.GET_FOTO_MENU_SUCCESS,
  payload,
});
export const GetFotoMenuFailed = (payload: any) => ({
  type: ActionFoto.GET_FOTO_MENU_FAILED,
  payload,
});

export const DeleteFotoMenuRequest = (payload: any) => ({
  type: ActionFoto.DELETE_FOTO_MENU_REQUEST,
  payload,
});
export const DeleteFotoMenuSuccess = (payload: any) => ({
  type: ActionFoto.DELETE_FOTO_MENU_SUCCESS,
  payload,
});
export const DeleteFotoMenuFailed = (payload: any) => ({
  type: ActionFoto.DELETE_FOTO_MENU_FAILED,
  payload,
});
