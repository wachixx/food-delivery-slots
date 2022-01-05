export type Dispatch = React.Dispatch<IAction>

export interface IState {
}

export interface IAction {
  type: string,
  key:string,
  payload: any
}

export interface OrderObject { 
    key: number,
    time: string;
    maximumOrders: number;
    ordersPlaced: number;
}
  
export interface Order {
    date: string,
    time: string,
    orderId: string,
    customerId: string
}