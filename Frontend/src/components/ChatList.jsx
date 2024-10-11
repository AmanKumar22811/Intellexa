import React from "react";
import { Link } from "react-router-dom";

const ChatList = () => {
  return (
    <div className="flex flex-col h-[100%]">
      <span className="font-semibold text-base mb-2">DASHBOARD</span>
      <Link to="/dashboard">Create a new chat</Link>
      <Link to="/">Explore from Intellxa</Link>
      <Link to="/">Contact</Link>
      <hr className="border-none h-[2px] bg-white opacity-20 rounded-md m-5 ml-0 mr-0" />
      <span className="font-semibold text-base mb-2">RECENT CHATS</span>
      <div className="flex flex-col overflow-scroll overflow-x-hidden">
        <Link to="/" className="p-2 rounded-lg hover:bg-[#2c2937] w-[95%]">My chat title</Link>
        <Link to="/" className="p-2 rounded-lg hover:bg-[#2c2937] w-[95%]">My chat title</Link>
        <Link to="/" className="p-2 rounded-lg hover:bg-[#2c2937] w-[95%]">My chat title</Link>
        <Link to="/" className="p-2 rounded-lg hover:bg-[#2c2937] w-[95%]">My chat title</Link>
        <Link to="/" className="p-2 rounded-lg hover:bg-[#2c2937] w-[95%]">My chat title</Link>
        <Link to="/" className="p-2 rounded-lg hover:bg-[#2c2937] w-[95%]">My chat title</Link>
        <Link to="/" className="p-2 rounded-lg hover:bg-[#2c2937] w-[95%]">My chat title</Link>
        <Link to="/" className="p-2 rounded-lg hover:bg-[#2c2937] w-[95%]">My chat title</Link>
        <Link to="/" className="p-2 rounded-lg hover:bg-[#2c2937] w-[95%]">My chat title</Link>
        <Link to="/" className="p-2 rounded-lg hover:bg-[#2c2937] w-[95%]">My chat title</Link>
      </div>

      <hr className="border-none h-[2px] bg-white opacity-20 rounded-md m-5 ml-0 mr-0" />
      <div className="mt-auto flex items-center gap-2 text-sm">
        <img
          src="https://cdn.pixabay.com/photo/2023/05/08/00/43/chatgpt-7977357_640.png"
          alt=""
          className="h-8"
        />
        <div className="flex flex-col ">
          <span className="font-medium">Upgrade to Intellexa Pro</span>
          <span className="text-[#888]">Get unlimited access to all features</span>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
