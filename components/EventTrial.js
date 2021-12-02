import link from "next/link";
import React from "react";
import { UPCOMING,EVENT_LIST } from "../utils/constants";
import EventCard from "./EventCard"

const Events = () => {
    return (

        <div className="container m-auto place-items-center mt-0  ">
            <div className="rounded-lg px-4  py-2  my-10 m-auto text-center">
                {/* Section 1 : Upcoming Events */}
                <div className="bg-gray-900 p-5 w-full mb-24 my-12  ">
                    <h1 className="mx-5 text-6xl text-primary text-left uppercase ">
                        Upcoming Event
                    </h1>
                    <hr className="w-56 mx-5 mt-8 bg-primary text-primary animate-pulse"></hr>
                    <div className=" lg:mx-5 my-5 m-auto p-5 ">
                        {" "}
                        <div className="bg-opacity-75  rounded-lg">
                            {/*<p className="mx-1 py-2 text-xl text-left tracking-wider leading-8  font-light">There are no upcoming events at the moment. </p>*/}
                            
                               {UPCOMING.map((upcoming) => 
                                (
                                    <div className="md:flex my-2 text-left">
                                        <img src={upcoming.EventImage}  className="w-80  rounded-full "></img>
                                    <div className="text-left m-5 p-5 mt-10 tracking-wider leading-8  font-light">
                                        <h1 className="text-2xl pt-2 uppercase">{upcoming.EventName}</h1>
                                        <p className="text-primaryDark text-opacity-100 text-xl">{upcoming.EventDate}</p>
                                        <p>{upcoming.EventDescript}</p>
                                    </div>
                                    </div>
                                ))}
                            
                        </div>
                    </div>
                </div>
                {/*Section 2 : Past Events */}
                <div className="mt-12 p-8 ">
                    <h1 className="font-normal text-6xl text-primary text-left uppercase my-8">Past Events</h1>
                    <hr className="w-56 mx-2 mt-8 bg-primary text-primary animate-pulse "></hr>
                    <div className="flex  flex-wrap md:flex-nowrap justify-between items-stretch mt-8 ">
                        <div className="md:flex my-2 justify-center">
                            {EVENT_LIST.map((event) => <EventCard key={event.EventName} {...event} />)}
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default Events;
