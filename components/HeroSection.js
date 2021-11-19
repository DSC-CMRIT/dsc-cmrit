import React from "react";
import AnimatedTyping from "./AnimatedTyping";
import EventBanner from "./EventBanner";
import { COMMUNITY_LINKS } from "../utils/constants";

const HeroSection = () => {
  return (
    <>
      <div className="flex justify-between items-center pt-10 md:px-10 px-2 flex-wrap">
        <div className="md:w-1/2 w-full">
          <span className="text-white my-2 block mx-1">
            For the love of learning & developing!
          </span>
          <AnimatedTyping
            strings={[
              "Hello",
              "Namaste",
              "Vanakkam",
              "Adab",
              "Sat Sri Akaal",
              "Namaskar",
            ]}
            sameLineText="from"
            nextLineText="DSC CMRIT"
          />
          <p className="md:w-2/3 w-full block ml-1 my-10">
            At GDSC CMRIT, we aim at building solutions & uplifting budding
            developers by providing peer-to-peer learning environment.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start">
            <div className="my-4 text-center md:text-left">
              {COMMUNITY_LINKS.map((link, idx) => (
                <a
                  href={link.href}
                  className={`bg-${link.color} text-xl ${
                    idx === 0
                      ? "rounded-tl-full rounded-bl-full"
                      : idx === COMMUNITY_LINKS.length - 1
                      ? "rounded-tr-full rounded-br-full"
                      : ""
                  } py-2 px-4 hover:bg-${link.darkColor} mt-2`}
                >
                  <i className={`fab fa-${link.iconClass}`}></i>
                </a>
              ))}
            </div>
            <div className="mt-4 mx-2">
              <a
                className="bg-gdscButton hover:bg-gdscButtonDark rounded-full py-2 text-xl px-2 animate-pulse"
                href="https://gdsc.community.dev/cmr-institute-of-technology-bengaluru/"
              >
                Join GDSC-CMRIT Chapter!
              </a>
            </div>
          </div>
        </div>
        <img
          src="/dsc_gif.gif"
          className="md:w-1/2 w-full block md:my-0 mx-auto my-4"
        />
//       </div>
//       <EventBanner name="GIT ready for LINUX" date="9 October 2021" />
//     </>
  );
};

export default HeroSection;
