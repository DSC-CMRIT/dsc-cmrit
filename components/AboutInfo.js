import React from "react";
import Goal from "./Goal";
const AboutInfo = () => {
  return (
    <div className="container m-auto place-items-center mt-0  ">
      <div className="rounded-lg px-4  py-2  my-10 m-auto text-center">
        <div className="bg-gray-800 p-5 w-full mb-24 my-12 ">
          <h1 className="mx-5 text-6xl text-primary text-left uppercase ">
            About Us
          </h1>
          <hr className="w-56 mx-5 mt-8 bg-primary text-primary animate-pulse"></hr>


          {/*bg-purple-600 bg-opacity-25  transition duration-500 ease-in transform hover:-translate-y-1 hover:scale-105*/}
          <div className=" lg:mx-5 my-5 m-auto  ">
            {" "}
            <div className="bg-opacity-75  rounded-lg">
              <p className="mx-1 py-2 text-xl text-left tracking-wider leading-8  font-light">
                GDSC CMRIT is a university-based community group for students
                interested in Google developer technologies. GDSC can take many
                forms-from just a few people getting together to watch some
                videos, to large gatherings with demos, tech talks, hackathons and
                conferences. We work on various technical domains and try to make
                use of Google Technologies to empower the audience around us. By
                joining a GDSC, students grow their knowledge in a peer-to-peer
                learning environment and build solutions for local businesses and
                their communities.
              </p>
              <div className="mx-1 my-10 mb-16 pt-8 text-left ">

                <a
                  className="bg-primary hover:bg-primaryDark text-white rounded-full  font-semibold p-5 text-xl animate-none"
                  href="/team "
                >
                  Meet Our Team
                </a>
              </div>
              {/* <img src="/about_us.jpg" className="md:w-80 sm:mx-auto rounded-r-lg"></img>  */}
            </div>
          </div>
        </div>
        {/* Goals starts */}
        <div className="mt-8 p-8 ">
          <h1 className="font-normal text-6xl text-primary text-left uppercase my-8">Our Goals</h1>
          <hr className="w-56 mx-2 mt-8 bg-primary text-primary "></hr>
          <div className="flex  flex-wrap md:flex-nowrap justify-between items-stretch mt-8 ">
            <Goal
              goalImage="/mission_edu.png"
              goalTitle="Education"
              goalText="GDSC CMRIT provides a platform for the growth and advancement of the student community in the field of technology by providing peer-to-peer learning environment."
            />
            <Goal
              goalImage="/mission_collab.png"
              goalTitle="Collaboration"
              goalText="We are not just a community but a mini India where people from diverse backgrounds,different majors and knowledge come together to collaborate and co-create new innovative ideas."
            />
            <Goal
              goalImage="/mission_innovate.png"
              goalTitle="Innovation"
              goalText="Through education and collaboration we want to provide students a platform where they can innovate and experiment along with the team. Developing innovative products is what separates one from the crowd. "
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutInfo;
