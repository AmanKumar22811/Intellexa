import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

const HomePage = () => {
  return (
    <div className="flex items-center gap-24 h-[100%] max-lg:flex-col max-lg:gap-0">
      {/* left */}
      <div className=" flex flex-col items-center justify-center gap-4 flex-1 text-center">
        <h1 className="text-8xl bg-gradient-to-r from-[#217bfe] to-[#e55571] text-transparent bg-clip-text max-xl:text-[64px]">
          INTELLEXA
        </h1>
        <h2 className="font-bold">
          Supercharge your creativity and productivity
        </h2>
        <h3 className="font-medium max-w-[70%] max-lg:max-w-[100%]">
          An advanced AI-powered chatbot designed to offer dynamic, real-time
          conversational experiences and intelligent assistance across a wide
          range of topics.
        </h3>
        <Link
          to="/dashboard"
          className="pt-4 pb-4 pl-6 pr-6 bg-[#217bfe] rounded-3xl text-sm mt-5 hover:bg-white hover:text-blue-500"
        >
          Get Started
        </Link>
      </div>

      {/* right */}

      <div className="flex-1 flex items-center justify-center h-[100%]">
        <div className="flex items-center justify-center bg-[#140e2d] rounded-3xl w-[80%] h-[50%] relative">
          <div className="w-[100%] h-[100%] overflow-hidden absolute top-0 left-0 rounded-2xl">
            <div className="bg-bg-image opacity-20 w-[200%] h-[100%] bg-[length:auto_100%] animate-bgAnimate"></div>
          </div>
          <img
            src="https://github.com/safak/chatgpt-clone/blob/completed/client/public/bot.png?raw=true"
            className="w-[100%] h-[100%] object-contain animate-botAnimate"
          />

          <div className="absolute bottom-[-30px] right-[-50px] flex items-center gap-3 p-2 bg-[#2c2937] rounded-lg max-lg:hidden max-xl:right-0">
            <img
              src="https://github.com/safak/chatgpt-clone/blob/completed/client/public/bot.png?raw=true"
              className="w-10 h-10 rounded-full"
            />
            <TypeAnimation
              sequence={[
                "Write a function to reverse a string in JavaScript.",
                2000,

                "You can use the `.split()`, `.reverse()`, and `.join()` methods for that!",
                2000,

                "What’s the best way to optimize a React app for performance?",
                2000,

                "Use memoization with `React.memo()` and lazy loading components.",
                2000,
              ]}
              wrapper="span"
              cursor={true}
              omitDeletionAnimation={true}
              repeat={Infinity}
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-2 left-[50%] transform -translate-x-1/2 flex flex-col items-center gap-3 max-lg:hidden">
        <img
          src="https://cdn.pixabay.com/photo/2023/05/08/00/43/chatgpt-7977357_640.png"
          className="h-6"
        />
        <div className="flex gap-3 text-[#888] text-sm">
          <Link to="/">Terms of Service</Link>
          <Link to="/">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
