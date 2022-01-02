
export const DateFormatter = (date:Date) => {

    var dayOfWeekArray=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Sarturday'];
    var formattedDate =  date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    var dayOfWeek = dayOfWeekArray[date.getDay()];
    let maximumOrders = 0;

    switch (dayOfWeek) { 
        case "Monday" :
            maximumOrders = 4;
            break;
        case "Tuesday": case "Wednesday": case "Thursday": case "Friday" :
            maximumOrders = 2;
            break;
        default:                                                                
            maximumOrders = 0;  
    }
    
    var formatObject = { 
        dayOfWeek: dayOfWeekArray[date.getDay()],
        maximumOrders: maximumOrders,
        formattedDate: formattedDate
    }

    return formatObject;

}