import React from "react";
const Goal = ({ goalImage, goalTitle, goalText }) => {
  return (
    <div className="lg:mx-2 mr-30 bg-primary-200  flex  flex-col justify-between my-5 m-auto  rounded-none transition duration-500 ease-in transform hover:-translate-y-1 hover:scale-105">
      
      <div  className="bg-opacity-75 rounded-none w-50 ">
        
        {/* Card-Header */}
        <div className="h-50   align-bottom">
          {/* Card-Image */}
          <img className="w-38  h-48 mx-auto  my-8 round-full  " src={goalImage} />
          {/* Card-Heading*/}
          <h3 className="text-4xl text-opacity-100  text-primaryDark ">
            {goalTitle}
          </h3>
        </div>
        
        {/* Card-Body */}
        <div className=" w-auto font-light">
        <p className="mx-5  text-xl text-center text-light p-5 tracking-wider">{goalText}</p>
        </div>

      </div>
    </div>
  );
};
export default Goal;
