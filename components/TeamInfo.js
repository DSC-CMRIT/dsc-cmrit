import React from "react";
import TeamMembers from "./TeamMembers";

const TeamInfo = () => {
    return (
        <div className="container mx-auto my-10">
            <h1 className="text-5xl text-primary uppercase text-center">Meet the team</h1>
            <div className="md:flex my-2 justify-center">
                <TeamMembers
                    memberImage="/Members Images/Amartya.jpeg"
                    memberName="Amartya Nambiar"
                    memberDesg="GDSC Lead"
                    memberInterests="Data science"
                    memberGithub="https://github.com/amartyanambiar"
                    memberLinkedIn="https://www.linkedin.com/in/amartya-nambiar1/"
                    //memberInstagram=""
                />
                <TeamMembers
                    memberImage="/Members Images/Arpan.png"
                    memberName="Arpan Abhishek"
                    memberDesg="Tech Lead"
                    memberInterests="Web development and blockchain"
                    memberGithub="https://github.com/arpancodes"
                    memberLinkedIn="https://www.linkedin.com/in/arpancodes/"
                    memberInstagram="https://www.instagram.com/arpancodes/"
                />
                <TeamMembers
                    memberImage="/Members Images/Gargi.jpeg"
                    memberName="Gargi Sharma"
                    memberDesg="Marketing Lead"
                    memberInterests=""
                    memberGithub=""
                    memberLinkedIn=""
                    memberInstagram=""
                />
            </div>
            <div className="md:flex mb-2 justify-center">
                <TeamMembers
                    memberImage="/Members Images/Amrutha.png"
                    memberName="C K Amrutha"
                    memberDesg="Core Member"
                    memberInterests="Aspiring web developer"
                    memberGithub="https://github.com/Amrutha1101"
                    memberLinkedIn="https://www.linkedin.com/in/amrutha-c-k-77a206196/"
                    memberInstagram="https://www.instagram.com/ck._.amrutha/"
                />
                <TeamMembers
                    memberImage="/Members Images/Rajneesh.jpeg"
                    memberName="Rajneesh Khare"
                    memberDesg="Core Member"
                    memberInterests="RPA, Django"
                    memberGithub="https://github.com/rajneeshk94"
                    memberLinkedIn=" https://www.linkedin.com/in/rajneesh-khare-555a881b4/"
                    memberInstagram=" https://www.instagram.com/__.r.a.j.__/"
                />
                <TeamMembers
                    memberImage="/Members Images/Satwik.png"
                    memberName="Kumar Satwik"
                    memberDesg="Core Member"
                    memberInterests="Aspiring android developer"
                    memberGithub="https://github.com/developer-metalhead"
                    memberLinkedIn="https://www.linkedin.com/in/kumar-satwik-038291203/"
                    memberInstagram="https://www.instagram.com/developer_metalhead/"
                />
                <TeamMembers
                    memberImage="/Members Images/Ayush.png"
                    memberName="Aayush Dubey"
                    memberDesg="Core Member"
                    memberInterests="Competitive programming"
                    memberGithub=""
                    memberLinkedIn="http://linkedin.com/in/aayush-dubey-05159b218"
                    memberInstagram=""
                />
            </div>
            <div className="md:flex mb-5 justify-center">
                <TeamMembers
                    memberImage="/Members Images/Sayan.png"
                    memberName="Sayan Basu"
                    memberDesg="Core Member"
                    memberInterests="Artificial Intelligence and Machine Learning"
                    memberGithub="https://github.com/sayanbasu-cs"
                    memberLinkedIn="https://www.linkedin.com/in/sayan-basu-174985201/"
                    memberInstagram="https://www.instagram.com/sayanbasu.py/"
                />
                <TeamMembers
                    memberImage="/Members Images/Babitha.jpeg"
                    memberName="Babitha Kumari"
                    memberDesg="Core Member"
                    memberInterests="Has sound knowledge in web development"
                    memberGithub="https://github.com/Babithakumari"
                    memberLinkedIn="https://www.linkedin.com/in/babithakumari/ "
                    memberInstagram="https://www.instagram.com/bub_._ly/"
                />
                <TeamMembers
                    memberImage="/Members Images/Rijuth.jpeg"
                    memberName="Rijuth Menon R"
                    memberDesg="Core Member"
                    memberInterests="Full stack Development, Blockchain and FOSS"
                    memberGithub="https://github.com/markisdev"
                    memberLinkedIn=" https://linkedin.com/in/rijuthmenon"
                    memberInstagram="https://instagram.com/rijuth"
                />
            </div>
        </div>
    );
};
export default TeamInfo;