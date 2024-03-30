
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

export const changeOrderStage = (order, nextStage) => { 
  return {
      type: 'CHANGE_ORDER_STAGE',
      payload: {
         ...order,
          stage: nextStage,
      }
  }
}

export const updateOrderTime = (order, time, total) => {
    return {
        type: 'UPDATE_ORDER_TIME',
        payload: {
           ...order,
            startTime: time,
            totalTime: total
        }
    }
}

export const cancelOrder = (order) => {
     return {
        type: 'CANCEL_ORDER',
        payload: {
           ...order

        }
     }
}