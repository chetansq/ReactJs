import { PRODUCT_SET } from "./Constant"


export const product_set = (for_Product_set) => {
    return {
        type: PRODUCT_SET,
        payload: for_Product_set
    }
}