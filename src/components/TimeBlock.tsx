import React from 'react';

interface Props {
    dailyOrder: any
}

const TimeBlock: React.FC<Props> = ({ 
    dailyOrder
}) => { 
    if(dailyOrder.ordersPlaced < dailyOrder.maximumOrders){
        return (
            <div className='delivery-block'>
                <h1>{dailyOrder.time}</h1>
                <p>{dailyOrder.maximumOrders - dailyOrder.ordersPlaced} delivery slots available.</p>
            </div>
        );
    }
    return <></>
}

export default TimeBlock;
