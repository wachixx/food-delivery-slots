import React from 'react';

interface Props {
    day: string
}

const NoDeliverySlot:  React.FC<Props> = (day) => { 
    console.log(day);
  return (
    <div className='delivery-block centered'>
        <p>We do not have deliveries on {day.day}</p>
    </div>
  );
}

export default NoDeliverySlot;
