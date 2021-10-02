import link from "next/link";
import React from "react";
import { COMMUNITY_LINKS, TEAM_LINKS } from "../utils/constants";

const Team = () => {
  return (
    <div className="container mx-auto my-10">
      <h1 className="text-5xl text-primary uppercase text-center">
        Meet the team
      </h1>
      <div className="flex flex-wrap justify-self-auto justify-center">
        {TEAM_LINKS.map((link, idx) => (
          <div className="m-10 bg-gray-900 p-10 rounded-lg text-center transition duration-500 ease-in transform hover:-translate-y-1 hover:scale-105 md:w-1/4 w-1/2 ">
            <img src={link.Image} className="w-80 rounded-full "></img>
            <div>
              <h1 className="text-2xl pt-2 uppercase">{link.Name}</h1>
              <p className="text-purple-600 text-opacity-100 text-xl">
                {link.Desg}
              </p>
              <p>{link.Interests}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
