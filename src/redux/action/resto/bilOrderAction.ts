import * as ActionBil from "../../constant/resto/bilOrderConstant";
export const CreateMenuRequest = (payload: any) => ({
  type: ActionBil.CREATE_BIL_ORDER_REQUEST,
  payload,
});
export const CreateMenuSuccess = (payload: any) => ({
  type: ActionBil.CREATE_BIL_ORDER_SUCCESS,
  payload,
});
export const CreateMenuFailed = (payload: any) => ({
  type: ActionBil.CREATE_BIL_ORDER_FAILED,
  payload,
});
