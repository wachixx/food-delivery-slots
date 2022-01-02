import React, {createContext, ReactNode, useReducer} from "react";              
import Reducer from './Reducer';                                                                                                                                              
import { IState} from "./Interfaces";

const initialState: IState = {
     customerId : "a-111",
     dateSelected : new Date()
};
                                                                                                                          
export const Context = createContext<IState | any>(initialState);                                                 
                                                                                
const Store = ({children}: {children:ReactNode}) => {                                                 
    const [state, dispatch] = useReducer(Reducer, initialState);                                                                                                                                               
    return (                                                                    
        <Context.Provider value={[state, dispatch]}>                            
            {children}                                                          
        </Context.Provider>                                                     
    )                                                                           
}; 

export default Store;