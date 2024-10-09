import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex items-center gap-24 h-[100%]">
      {/* left */}
      <div className=" flex flex-col items-center justify-center gap-4 flex-1 text-center">
        <h1 className="text-8xl bg-gradient-to-r from-[#217bfe] to-[#e55571] text-transparent bg-clip-text">
          INTELLEXA
        </h1>
        <h2 className="font-bold">
          Supercharge your creativity and productivity
        </h2>
        <h3 className="font-medium max-w-[70%]">
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
        </div>
      </div>
    </div>
  );
};

export default HomePage;
