import React from "react";
import { useAuth } from "@clerk/clerk-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {

  const queryClient = useQueryClient();
  const navigate = useNavigate();
  
  const mutation = useMutation({
    mutationFn: (text) => {
      return fetch(`${import.meta.env.VITE_API_URL}/api/chats`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      }).then((res) => res.json());
    },
    onSuccess: (id) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["userChats"] });
      navigate(`/dashboard/chats/${id}`);
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const text = e.target.text.value;
    if (!text) return;
    mutation.mutate(text);
  };

  return (
    <div className="h-[100%] flex flex-col items-center">
      <div className="flex flex-col items-center justify-center flex-1 w-[50%] gap-12">
        <div className="flex items-center gap-5 opacity-20">
          <img
            src="https://cdn.pixabay.com/photo/2023/05/08/00/43/chatgpt-7977357_640.png"
            className="h-16"
          />
          <h1 className="text-6xl bg-gradient-to-r from-[#217bfe] to-[#e55571] text-transparent bg-clip-text max-xl:text-[64px]">
            INTELLEXA
          </h1>
        </div>

        <div className="w-[100%] flex items-center gap-12 justify-between">
          <div className="flex flex-col gap-2 font-medium p-5 pr-0 text-base border border-gray-500 rounded-2xl flex-1">
            <img
              src="https://github.com/safak/chatgpt-clone/blob/completed/client/public/chat.png?raw=true"
              className="h-10 w-12 object-cover"
            />
            <span>Create a New Chat</span>
          </div>
          <div className="flex flex-col gap-2 font-medium p-5 pr-0 text-base border border-gray-500 rounded-2xl flex-1">
            <img
              src="https://github.com/safak/chatgpt-clone/blob/completed/client/public/image.png?raw=true"
              className="h-14 w-12 object-cover"
            />
            <span>Analyse images</span>
          </div>
          <div className="flex flex-col gap-2 font-medium p-5 pr-0 text-base border border-gray-500 rounded-2xl flex-1">
            <img
              src="https://github.com/safak/chatgpt-clone/blob/completed/client/public/code.png?raw=true"
              className="h-10 w-12 object-cover"
            />
            <span>Help me with my code</span>
          </div>
        </div>
      </div>
      <div className="mt-auto w-[50%] bg-[#2c2937] rounded-2xl flex mb-2">
        <form
          className="w-[100%] h-[100%] flex items-center justify-between mb-2"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="text"
            placeholder="Ask me anything..."
            className="flex-1 p-5 bg-transparent border-none outline-none text-[#ececec]"
          />
          <button className="bg-[#605e68] rounded-full border-none p-2 flex items-center justify-center mr-5">
            <img
              src="https://github.com/safak/chatgpt-clone/blob/completed/client/public/arrow.png?raw=true"
              className="h-5"
            />
          </button>
        </form>
      </div>
    </div>
  );
};

export default DashboardPage;
