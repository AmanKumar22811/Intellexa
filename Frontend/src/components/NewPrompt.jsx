import React, { useEffect, useRef, useState } from "react";
import Upload from "./Upload";
import { IKImage } from "imagekitio-react";
import model from "../lib/gemini";
import Markdown from "react-markdown";

const NewPrompt = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [image, setImage] = useState({
    isLoading: false,
    error: "",
    dbData: {},
  });
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current.scrollIntoView({ behaviour: "smooth" });
  }, [question, answer, image.dbData]);

  const add = async (text) => {
    setQuestion(text);
    const result = await model.generateContent(text);
    setAnswer(result.response.text());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const text = e.target.text.value;
    if (!text) return;
    add(text);
    e.target.text.value = "";
  };

  return (
    <div>
      {image.isLoading && <div>Loading...</div>}
      {image.dbData?.filePath && (
        <IKImage
          urlEndpoint={import.meta.env.VITE_IMAGE_KIT_ENDPOINT}
          path={image.dbData?.filePath}
          width="380"
          transformation={[{ width: 380 }]}
        />
      )}

      {question && (
        <div className="flex flex-col">
          <div className="p-4 bg-[#2c2937] rounded-lg max-w-[80%] self-end">
            {question}
          </div>
        </div>
      )}
      {answer && (
        <div className="p-4 ">
          <Markdown>{answer}</Markdown>
        </div>
      )}
      <div className="pb-[100px]" ref={endRef}></div>

      <form
        className="w-[80%] absolute bottom-0 bg-[#2c2937] rounded-[20px] flex items-center gap-5 px-5"
        onSubmit={handleSubmit}
      >
        <Upload setImage={setImage} />
        <input id="file" type="file" multiple={false} hidden />
        <input
          type="text"
          placeholder="Ask me anything..."
          className="flex-1 p-5 border-none outline-none bg-transparent text-[#ececec]"
          name="text"
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
