export const transformData = data => {
  const dateObj = new Date(data);

  const minutes = dateObj.getMinutes().toString().padStart(2, '0');
  
  const hours = dateObj.getHours().toString().padStart(2, '0');
  
  const day = dateObj.getDate().toString().padStart(2, '0');
  
  const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
  
  const year = dateObj.getFullYear().toString();

  const formattedDate = `${hours > 12 ? hours - 12 : hours}.${minutes}${
    hours > 12 ? 'PM' : 'AM'
  }  ${day}.${month}.${year}`;

  return formattedDate;
};
