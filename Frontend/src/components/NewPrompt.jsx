import React, { useEffect, useRef, useState } from "react";
import Upload from "./Upload";
import { IKImage } from "imagekitio-react";

const NewPrompt = () => {
  const [image, setImage] = useState({
    isLoading: false,
    error: "",
    dbData: {},
  });
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current.scrollIntoView({ behaviour: "smooth" });
  }, []);

  return (
    <div>
      {image.isLoading && <div>Loading...</div>}
      {image.dbData?.filePath && (
        <IKImage
          urlEndpoint={import.meta.env.VITE_IMAGE_KIT_ENDPOINT}
          path={image.dbData?.filePath}
          width="380"
          transformation={[{width:380}]}
        />
      )}
      <div className="pb-[100px]" ref={endRef}></div>
      <form className="w-[80%] absolute bottom-0 bg-[#2c2937] rounded-[20px] flex items-center gap-5 px-5">
        <Upload setImage={setImage} />
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
