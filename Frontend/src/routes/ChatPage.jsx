import React from "react";
import NewPrompt from "../components/NewPrompt";

const ChatPage = () => {
  return (
    <div className="h-[100%] flex flex-col items-center relative">
      <div className="flex-1 overflow-y-auto overflow-x-hidden w-[100%] flex justify-center">
        <div className="w-[80%] flex flex-col gap-5">
          <div className="p-4">Test message from ai</div>
          <div className="p-4 bg-[#2c2937] rounded-lg max-w-[80%] self-end">
            Test message from user
          </div>
          <div className="p-4">Test message from ai</div>
          <div className="p-4 bg-[#2c2937] rounded-lg max-w-[80%] self-end">
            Test message from user
          </div>
          <div className="p-4">Test message from ai</div>

          <div className="p-4">Test message from ai</div>
          <div className="p-4 bg-[#2c2937] rounded-lg max-w-[80%] self-end">
            Test message from user
          </div>
          <div className="p-4">Test message from ai</div>
          <div className="p-4 bg-[#2c2937] rounded-lg max-w-[80%] self-end">
            Test message from user
          </div>
          <div className="p-4">Test message from ai</div>
          <NewPrompt />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
