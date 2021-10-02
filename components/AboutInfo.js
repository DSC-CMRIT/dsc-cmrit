import React from "react";
import Goal from "./Goal";
const AboutInfo = () => {
  return (
    <div className="container m-auto my-10"> 
       <div className="md:w-4/5 w-11/12 rounded-lg px-4  py-2  my-10 m-auto text-center">
            <h1 className="text-5xl text-primary text-center uppercase">About Us</h1>
            <div className=" lg:mx-2 my-5 m-auto bg-purple-600 bg-opacity-25  transition duration-500 ease-in transform hover:-translate-y-1 hover:scale-105 ">
            {" "}
                <div className="bg-opacity-75 bg-purple-600 rounded-lg">
                    <p className="mx-5 py-5 text-xl">
                        GDSC CMRIT is a university-based community group for students
                        interested in Google developer technologies. GDSC can take many
                        forms-from just a few people getting together to watch some
                        videos, to large gatherings with demos, tech talks, hackathons and
                        conferences. We work on various technical domains and try to make
                        use of Google Technologies to empower the audience around us.. By
                        joining a GDSC, students grow their knowledge in a peer-to-peer
                        learning environment and build solutions for local businesses and
                        their communities.
                    </p>
                    {/* <img src="/about_us.jpg" className="md:w-80 sm:mx-auto rounded-r-lg"></img>  */}
                </div>
            </div>
            {/* Goals starts */}
            <h1 className="text-5xl text-primary uppercase">Our Goals</h1>
            <div className="lg:flex justify-between items-start">
                <Goal
                    goalImage="/mission_edu.png"
                    goalTitle="Education"
                    goalText="GDSC CMRIT provides a platform for the growth and advancement of the student community in the field of technology by providing peer-to-peer learning environment by conducting webinars and events , providing hands on experiences on topics like Web Development, Mobile App Development, Machine Learning and much more!"
                />
                <Goal
                    goalImage="/mission_collab.png"
                    goalTitle="Collaboration"
                    goalText="We are not just a community but a mini India where people from diverse backgrounds,different majors and knowledge come together to collaborate and co-create new innovative ideas that would help solve real world problems, build solutions for the local problems and beget a community that aspires for a positive and impactful change."
                />
                <Goal
                    goalImage="/mission_innovate.png"
                    goalTitle="Innovation"
                    goalText="Through education and collaboration we want to provide students a platform where they can innovate and experiment along with the team. Developing innovative products is what separates one from the crowd. Therefore, we want to lay the foundation necessary to bring our innovative visions to life through the power of technology."
                />
            </div>
        </div>
    </div>
  );
};
export default AboutInfo;