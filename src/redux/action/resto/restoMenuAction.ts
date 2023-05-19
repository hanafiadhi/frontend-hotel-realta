import * as ActionRestoMenu from "../../constant/resto/restoMenuConstant";

export const GetMenuRequest = () => ({
  type: ActionRestoMenu.GET_MENU_REQUEST,
});
export const GetMenuSuccess = (payload: any) => ({
  type: ActionRestoMenu.GET_MENU_SUCCESS,
  payload,
});
export const GetMenuFailed = (payload: any) => ({
  type: ActionRestoMenu.GET_MENU_FAILED,
  payload,
});

export const GetOneMenuRequest = () => ({
  type: ActionRestoMenu.GET_ONE_MENU_REQUEST,
});
export const GetOneMenuSuccess = (payload: any) => ({
  type: ActionRestoMenu.GET_ONE_MENU_SUCCESS,
  payload,
});
export const GetOneMenuFailed = (payload: any) => ({
  type: ActionRestoMenu.GET_ONE_MENU_FAILED,
  payload,
});

export const CreateMenuRequest = (payload: any) => ({
  type: ActionRestoMenu.CREATE_MENU_REQUEST,
  payload,
});
export const CreateMenuSuccess = (payload: any) => ({
  type: ActionRestoMenu.CREATE_MENU_SUCCESS,
  payload,
});
export const CreateMenuFailed = (payload: any) => ({
  type: ActionRestoMenu.CREATE_MENU_FAILED,
  payload,
});

export const UpdateMenuRequest = (payload: any) => ({
  type: ActionRestoMenu.UPDATE_MENU_REQUEST,
  payload,
});
export const UpdateMenuSuccess = (payload: any) => ({
  type: ActionRestoMenu.UPDATE_MENU_SUCCESS,
  payload,
});
export const UpdateMenuFailed = (payload: any) => ({
  type: ActionRestoMenu.UPDATE_MENU_FAILED,
  payload,
});

export const DeleteMenuRequest = (payload: any) => ({
  type: ActionRestoMenu.DELETE_MENU_REQUEST,
  payload,
});
export const DeleteMenuSuccess = (payload: any) => ({
  type: ActionRestoMenu.DELETE_MENU_SUCCESS,
  payload,
});
export const DeleteMenuFailed = (payload: any) => ({
  type: ActionRestoMenu.DELETE_MENU_FAILED,
  payload,
});
