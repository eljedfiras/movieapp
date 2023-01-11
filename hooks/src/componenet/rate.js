import React from 'react'

export default function RateMovie({rates}) {
  
  const arrStar = [1, 2, 3, 4, 5];
  
  return (
    <div className='rate'>
      {
        arrStar.map((el) =>
         el <= rates ? <i class="fa-solid fa-star"></i> : <i class="fa-regular fa-star"></i> 
         )
      }
      
    </div>
  );
}
