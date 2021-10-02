import React from "react";
const Goal = ({goalImage, goalTitle,goalText}) => {
    return (
        <div className="md:w-96 md:w-1/2 lg:mx-2 my-5 m-auto bg-purple-600 bg-opacity-25 rounded-lg transition duration-500 ease-in transform hover:-translate-y-1 hover:scale-105">
            <img className="w-52 pt-4 h-40 mx-auto my-8" src={goalImage}></img>
            <div className="bg-purple-600 bg-opacity-75 rounded-b-lg">
                <h3 className="text-4xl py-3.5 text-green-600 text-black text-opacity-100">{goalTitle}</h3>
                <p className="mx-5 pb-5 text-xl">{goalText}</p>
            </div>
        </div>


    );
    };
export default Goal;            