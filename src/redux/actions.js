
import { ORDER_PLACED } from "./actionConstant";
let orderCount = 0;
export const makeNewOrder = (order) => {
      const orderID = `00${++orderCount}`;
    return {
        type: 'ADD_ORDER',
        payload: {
           ...order,
            id: orderID,
            stage: ORDER_PLACED,
            startTime: 0,
            totalTime: 0
        }
    }
}