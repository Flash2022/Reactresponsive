import React from 'react';
import { cardsData } from './CardsData';
import './Cards.css';

const Cardgen = (props) => {
  return (
    <div className="returns">
     
        {cardsData.map((item, index) => {
          return (
            <div className="outermost">
               <img className="image" height="70px" width="70px" src={item.path} alt="foodimage"  />
               <div className="title">
                  <h4>{item.title}</h4>
               </div>
           </div>
             );
              })}

    </div>
  );
};

export default Cardgen;
