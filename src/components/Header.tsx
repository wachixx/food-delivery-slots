import React, {useEffect, useState, useContext} from 'react';
import {Context}  from '../context/Store';
import {DateFormatter} from '../utils/Index';


const Header: React.FC = () => { 

  const [state, dispatch] = useContext(Context);
  const [day, setDay] = useState<Date>(new Date());

  const handleDayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDay(new Date(e.target.value));
    dispatch({type:"SET",key:"dateSelected", payload: new Date(e.target.value)});
  }

  return (
    <header className="header-wrapper">
         <div className='header-left'>
             <h1>{DateFormatter(day).dayOfWeek}</h1>
             <p>{DateFormatter(day).formattedDate}</p>
         </div>
         <div className='header-right'>
             <input type="date" name="date" onChange={e => handleDayChange(e)}/>
         </div>
    </header>
  );
}

export default Header;
