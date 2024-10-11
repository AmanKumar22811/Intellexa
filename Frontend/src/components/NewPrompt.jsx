import React, { useEffect, useRef } from "react";

const NewPrompt = () => {
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current.scrollIntoView({ behaviour: "smooth" });
  }, []);

  return (
    <div>
      <div className="pb-[100px]" ref={endRef}></div>
      <form className="w-[80%] absolute bottom-0 bg-[#2c2937] rounded-[20px] flex items-center gap-5 px-5">
        <label
          htmlFor="file"
          className="rounded-full bg-[#605e68] border-none p-2 flex items-center justify-center cursor-pointer"
        >
          <img
            src="https://github.com/safak/chatgpt-clone/blob/completed/client/public/attachment.png?raw=true"
            className="h-4"
          />
        </label>
        <input id="file" type="file" multiple={false} hidden />
        <input
          type="text"
          placeholder="Ask me anythimg..."
          className="flex-1 p-5 border-none outline-none bg-transparent text-[#ececec]"
        />
        <button className="rounded-full bg-[#605e68] border-none p-2 flex items-center justify-center ">
          <img
            src="https://github.com/safak/chatgpt-clone/blob/completed/client/public/arrow.png?raw=true"
            className="h-4"
          />
        </button>
      </form>
    </div>
  );
};

export default NewPrompt;
