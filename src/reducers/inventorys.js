import {
  GET_INVENTORY_LIST,
  GET_INVENTORY_DETAIL,
  POST_INVENTORY_CREATE,
  PUT_INVENTORY_EDIT,
  PUT_LOGGING_EDIT,
  GET_LOGGING_LIST,
  GET_LOGGING_DETAIL,
} from "../actions/inventoryAction";

let initialState = {
  getInventoryList: false,
  errorInventoryList: false,
  getInventoryDetail: false,
  errorInventoryDetail: false,
  getResponDataInventory: false,
  errorResponDataInventory: false,
  getLoggingList: false,
  errorLoggingList: false,
  hitungLogging: false,
  getLoggingDetail: false,
  errorLoggingDetail: false,
  title: "Pervasive",
};

const inventorys = (state = initialState, action) => {
  switch (action.type) {
    case GET_INVENTORY_LIST:
      return {
        ...state,
        getInventoryList: action.payload.data,
        errorInventoryList: action.payload.errorMessage,
      };
    case GET_LOGGING_LIST:
      return {
        ...state,
        getLoggingList: action.payload.data,
        errorLoggingList: action.payload.errorMessage,
      };
    case GET_INVENTORY_DETAIL:
      return {
        ...state,
        getInventoryDetail: action.payload.data,
        errorInventoryDetail: action.payload.errorMessage,
      };

    case POST_INVENTORY_CREATE:
      return {
        ...state,
        getResponDataInventory: action.payload.data,
        errorResponDataInventory: action.payload.errorMessage,
      };

    case PUT_INVENTORY_EDIT:
      return {
        ...state,
        getResponDataInventory: action.payload.data,
        errorResponDataInventory: action.payload.errorMessage,
      };

    case PUT_LOGGING_EDIT:
      return {
        ...state,
        getResponDataLogging: action.payload.data,
        errorResponDataLogging: action.payload.errorMessage,
      };

    case GET_LOGGING_DETAIL:
      return {
        ...state,
        getLoggingDetail: action.payload.data,
        errorLoggingDetail: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default inventorys;
