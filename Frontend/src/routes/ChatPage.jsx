import React from "react";
import NewPrompt from "../components/NewPrompt";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import Markdown from "react-markdown";
import { IKImage } from "imagekitio-react";

const ChatPage = () => {
  const path = useLocation().pathname;
  const chatId = path.split("/").pop();

  const { isPending, error, data } = useQuery({
    queryKey: ["chat", chatId],
    queryFn: () =>
      fetch(`${import.meta.env.VITE_API_URL}/api/chats/${chatId}`, {
        credentials: "include",
      }).then((res) => res.json()),
  });

  return (
    <div className="h-[100%] flex flex-col items-center relative">
      <div className="flex-1 overflow-y-auto overflow-x-hidden w-[100%] flex justify-center">
        <div className="w-[80%] flex flex-col gap-5">
          {isPending
            ? "Loading..."
            : error
            ? "Something went wrong"
            : data?.history?.map((message, i) => {
                return (
                  <>
                    {message.img && (
                      <IKImage
                        urlEndpoint={import.meta.env.VITE_IMAGE_KIT_ENDPOINT}
                        path={message.img}
                        height={300}
                        width={400}
                        transformation={[{ height: 300, width: 400 }]}
                        loading="lazy"
                        lgip={{ active: true, quality: 20 }}
                      />
                    )}
                    <div
                      className={
                        message.role === "user"
                          ? "p-4 bg-[#2c2937] rounded-lg max-w-[80%] self-end"
                          : "p-4"
                      }
                    >
                      <Markdown>{message.parts[0].text}</Markdown>
                    </div>
                  </>
                );
              })}

          <NewPrompt data={data} />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
