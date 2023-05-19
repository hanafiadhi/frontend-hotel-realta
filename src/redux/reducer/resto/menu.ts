import * as ActionType from "../../constant/resto/restoMenuConstant";

const INIT_STATE = {
  menus: [],
  menu: [],
};

const RestoMenuReduce = (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case ActionType.GET_MENU_REQUEST:
      return { ...state };
    case ActionType.GET_MENU_SUCCESS:
      return GetMenuSuccessfully(state, action);
    case ActionType.GET_ONE_MENU_REQUEST:
      return { ...state };
    case ActionType.GET_ONE_MENU_SUCCESS:
      return GetOneMenuSuccessfully(state, action);
    case ActionType.CREATE_MENU_REQUEST:
      return { ...state };
    case ActionType.CREATE_MENU_SUCCESS:
      return AddMenuSuccessfully(state, action);
    case ActionType.UPDATE_MENU_REQUEST:
      return { ...state };
    case ActionType.UPDATE_MENU_SUCCESS:
      return EditMenuSuccessfully(state, action);
    case ActionType.DELETE_MENU_REQUEST:
      return { ...state };
    case ActionType.DELETE_MENU_SUCCESS:
      return DeleteMenuSuccessfully(state, action);
    default:
      return {
        ...state,
      };
  }
};

const GetMenuSuccessfully = (state: any, action: any) => {
  // const { payload } = action;
  return {
    ...state,
    menus: action.payload,
  };
};
const GetOneMenuSuccessfully = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    menu: payload,
  };
};
const AddMenuSuccessfully = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    menus: [...state.restoMenuState, payload],
  };
};
const EditMenuSuccessfully = (state: any, action: any) => {
  //   const { payload } = action;
  //   return {
  //     ...state,
  //     menus: payload,
  //   };
  return {
    ...state,
  };
};
const DeleteMenuSuccessfully = (state: any, action: any) => {
  //   const { payload } = action;
  //   return {
  //     ...state,
  //     menus: payload,
  //   };
  return {
    ...state,
  };
};
export default RestoMenuReduce;
