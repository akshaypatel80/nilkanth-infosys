import {
  ADMIN_DELETE_PRODUCT,
  ADMIN_PRODUCT,
  ADMIN_PRODUCT_LODING,
  ADMIN_SHOW_PRODUCT,
  ADMIN_SOWONE_PRODUCT,
  ADMIN_UPDATE_PRODUCT,
} from "./AdminShowProduct.type";

const initialValue = {
  adminProduct: [],
  adminallProduct: [],
  oneProduct: [],
  productData: {},
  product: 0,
  deletemsg: null,
  updatemsg: null,
  isLoding: false,
};
export const adminShowProductReducer = (
  state = initialValue,
  { type, payload }
) => {
  switch (type) {
    case ADMIN_SHOW_PRODUCT: {
      return {
        ...state,
        adminProduct: payload.products,
        product: payload.totalProduct,
        isLoding: false,
      };
    }
    case ADMIN_DELETE_PRODUCT: {
      return {
        ...state,
        deletemsg: payload.msg,
      };
    }
    case ADMIN_UPDATE_PRODUCT: {
      return {
        ...state,
        productData: payload.data,
        updatemsg: payload.msg,
        isLoding: false,
      };
    }
    case ADMIN_SOWONE_PRODUCT: {
      return {
        ...state,
        oneProduct: payload.data,
        isLoding: false,
      };
    }
    case ADMIN_PRODUCT: {
      return {
        ...state,
        adminallProduct: payload.product,
        isLoding: false,
      };
    }
    case ADMIN_PRODUCT_LODING: {
      return {
        ...state,
        isLoding: true,
      };
    }
    default:
      return state;
  }
};
