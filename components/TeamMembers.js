import React from "react";
const TeamMembers = ({memberImage,memberName,memberDesg,memberInterests,memberGithub,memberLinkedIn,memberInstagram}) => {
    return (
        <div className="m-10 bg-gray-900 p-10 rounded-lg text-center transition duration-500 ease-in transform hover:-translate-y-1 hover:scale-105 ">
            <img src={memberImage}  className="w-80  rounded-full "></img>
                <div>
                    <h1 className="text-2xl pt-2 uppercase">{memberName}</h1>
                    <p className="text-purple-600 text-opacity-100 text-xl">{memberDesg}</p>
                    <p>{memberInterests}</p>
                </div>
                <div className="flex justify-center">
                    <div className="bg-center text-black mt-4 rounded-full py-4 mx-2 bg-green-600 hover:bg-gradient-to-tr from-green-600 via-yellow-500 to-green-600">
                        <a href={memberGithub} target="_blank">
                            <i className="fab fa-github fa-2x self-center mx-4"></i>
                        </a>
                    </div>
                    <div className="bg-center text-blue-700 mt-4 rounded-full py-4 mx-2 bg-green-600 hover:bg-gradient-to-tr from-green-600 via-yellow-500 to-green-600">
                        <a href={memberLinkedIn} target="_blank">
                            <i className="fab fa-linkedin-in fa-2x self-center mx-4 "></i>
                        </a>
                    </div>
                    <div className="bg-center text-red-900 mt-4 rounded-full py-4 mx-2 bg-green-600 hover:bg-gradient-to-tr from-green-600 via-yellow-500 to-green-600">
                        <a href={memberInstagram} target="_blank" className="pt-4">
                            <i className="fab fa-instagram fa-2x self-center rounded-lg mx-4"></i>
                        </a>
                    </div>
                </div>
        </div>
    );
};
export default TeamMembers;