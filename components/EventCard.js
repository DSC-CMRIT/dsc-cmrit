import React from "react";
const EventCard = ({EventImage,EventName,EventDate,EventDescript} )=> {
    return (
        <div className="m-10 bg-gray-800 p-10 rounded-lg text-center transition duration-500 ease-in transform hover:-translate-y-1 hover:scale-105 ">
            <img src={EventImage}  className="w-80  rounded-full "></img>
                <div className="tracking-wider leading-8  font-light">
                    <h1 className="text-2xl pt-2 uppercase">{EventName}</h1>
                    <p className="text-primaryDark text-opacity-100 text-xl">{EventDate}</p>
                    <p>{EventDescript}</p>
                </div>
                
        </div>

    );
};
export default EventCard;
    
