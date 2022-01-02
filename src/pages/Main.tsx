import React, {useState, useEffect, useContext} from 'react';
import Header from '../components/Header';
import {Context}  from '../context/Store';
import TimeBlock from '../components/TimeBlock';
import NoDeliverySlot from '../components/NoDeliverySlot';
import {DateFormatter} from '../utils/DateFormatter';

interface OrderObject { 
  key: number,
  time: string;
  maximumOrders: number;
  ordersPlaced: number;
}

function Main() {
  
  const [state, dispatch] = useContext(Context);
  const [deliveryTimes, setDeliveryTimes] = useState(["10.30", "12.30", "18.30"]);
  const [orders, setOrders] = useState<Object>();
  const [dailyOrders, setDailyOrders] = useState<any>([]);

  const getdataForDay = () => {
    let orderObjects: OrderObject[] = [];
    //let ordersFetched = orders.filter(order => order.date === DateFormatter(state.dateSelected).formattedDate);
    deliveryTimes.forEach(time => {
      let orderObject : OrderObject = {
          key: Math.random(),
          time: time,
          maximumOrders : DateFormatter(state.dateSelected).maximumOrders,
          ordersPlaced : 0,
      }
      orderObjects.push(orderObject);
    });
    setDailyOrders(orderObjects);
  }

  const getTotalOrderForDeliveryTime = (time: string, Date: Date) => { 
  }

  const fetchData = () => {
    fetch('sample-orders.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        return response.json();
      })
      .then(function(data) {
        setOrders(data);
        getdataForDay();
      });
  }

  useEffect(()=>{
    fetchData()
  },[state.dateSelected])

  const renderTimeBlock = () => {
      if((DateFormatter(state.dateSelected).dayOfWeek !== "Sunday") && (DateFormatter(state.dateSelected).dayOfWeek !== "Sarturday")){
        return <>
          {dailyOrders.map(function(dailyOrder:OrderObject){
              return  <TimeBlock key={dailyOrder.key}
                dailyOrder = {dailyOrder}
              />
          })}
          </>
      }else{
        return <NoDeliverySlot day={DateFormatter(state.dateSelected).dayOfWeek}/>
      }
  }

  return (
    <div className='page-wrapper'>
      <h3>Select date and preffered time of delivery</h3>
      <div className='main-content'>
      <Header/>
        {renderTimeBlock()}
      </div>
    </div>
  );
}

export default Main;
