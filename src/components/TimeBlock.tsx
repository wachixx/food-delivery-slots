import React from 'react';

interface Props {
    dailyOrder: any
    onClick: () => void;
}

const TimeBlock: React.FC<Props> = ({ 
    dailyOrder,
    onClick
}) => { 
    if(dailyOrder.ordersPlaced < dailyOrder.maximumOrders){
        return (
            <div className='delivery-block' onClick={onClick}>
                <h1>{dailyOrder.time}</h1>
                <p>{dailyOrder.maximumOrders - dailyOrder.ordersPlaced} delivery slots available.</p>
            </div>
        );
    }
    return (
        <></>
    )
}

export default TimeBlock;
