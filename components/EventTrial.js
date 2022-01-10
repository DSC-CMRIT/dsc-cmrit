import link from "next/link";
import React from "react";
import { EVENT_LIST } from "../utils/constants";
import EventCard from "./EventCard";
import EventUpcoming from "./EventUpcoming";

const currentDate = new Date();

function getUpcomingEvent(upcoming) {
  let EventDate = new Date(upcoming.EventDate);
  if (EventDate >= currentDate) {
    return <EventUpcoming key={upcoming.EventName} {...upcoming} />;
  }
  return (
    <p className="mx-1 py-2 text-xl text-left tracking-wider leading-8  font-light">
      There are no upcoming events at the moment.
    </p>
  );
}

function getPastEvent(event) {
  let EventDate = new Date(event.EventDate);
  if (EventDate < currentDate) {
    return <EventCard key={event.EventName} {...event} />;
  }
  return null;
}

const Events = () => {
  return (
    <div className="container m-auto place-items-center mt-0  ">
      <div className="rounded-lg px-4  py-2  my-10 m-auto text-center">
        {/* Section 1 : Upcoming Event */}
        <div className="bg-gray-900 p-5 w-full mb-24 my-12  ">
          <h1 className="mx-5 text-6xl text-primary text-left uppercase ">
            Upcoming Event
          </h1>
          <hr className="w-56 mx-5 mt-8 bg-primary text-primary animate-pulse"></hr>
          <div className=" lg:mx-5 my-5 m-auto p-5 ">
            {" "}
            <div className="bg-opacity-75  rounded-lg">
              {getUpcomingEvent(EVENT_LIST[0])}
            </div>
          </div>
        </div>

        {/*Section 2 : Past Events */}
        <div className="mt-12 p-8 ">
          <h1 className="font-normal text-6xl text-primary text-left uppercase my-8">
            Past Events
          </h1>
          <hr className="w-56 mx-2 mt-8 bg-primary text-primary animate-pulse "></hr>
          <div className=" content-around mt-8 justify-self-auto justify-center ">
            <div className="grid grid-cols-3 gap-3 justify-self-auto justify-center">
              {EVENT_LIST.map((event) => getPastEvent(event))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
