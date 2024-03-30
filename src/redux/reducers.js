const initialState = {
    id:0,
    orders: []
}

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ORDER':
            return {
               ...state,
                orders: [...state.orders, action.payload]
            }
        case 'CHANGE_ORDER_STAGE':
              return {
                 ...state,
                  orders: state.orders.map(order => order.id === action.payload.id? {...order, stage: action.payload.stage, totalTime:  action.payload.totalTime, startTime: 0 } : order)
              }
        case 'UPDATE_ORDER_TIME' : 
              return {
                 ...state,
                  orders: state.orders.map(order => order.id === action.payload.id? {...order, totalTime:  action.payload.totalTime, startTime: action.payload.startTime } : order)
              }
        case 'CANCEL_ORDER':
            return {
               ...state,
                orders: state.orders.filter(order => order.id!== action.payload.id)
            }
        default:
            return state;
    }

}

export default orderReducer;