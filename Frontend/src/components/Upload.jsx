import React, { useRef } from "react";
import { IKContext, IKUpload } from "imagekitio-react";

const urlEndpoint = import.meta.env.VITE_IMAGE_KIT_ENDPOINT;
const publicKey = import.meta.env.VITE_IMAGE_KIT_PUBLIC_KEY;
const authenticator = async () => {
  try {
    const response = await fetch(`http://localhost:3000/api/upload`);

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Request failed with status ${response.status}: ${errorText}`
      );
    }

    const data = await response.json();
    const { signature, expire, token } = data;
    return { signature, expire, token };
  } catch (error) {
    console.log(error);

    throw new Error(`Authentication request failed: ${error.message}`);
  }
};

const Upload = ({ setImage }) => {
  const isUploadRef = useRef(null);
  const onError = (err) => {
    console.log("Error", err);
  };

  const onSuccess = (res) => {
    console.log("Success", res);
    setImage((prev) => ({ ...prev, isLoading: false, dbData: res }));
  };

  const onUploadProgress = (progress) => {
    console.log("Progress", progress);
  };

  const onUploadStart = (evt) => {
    console.log("Start", evt);
    setImage((prev) => ({ ...prev, isLoading: true }));
  };
  return (
    <IKContext
      urlEndpoint={urlEndpoint}
      publicKey={publicKey}
      authenticator={authenticator}
    >
      <IKUpload
        fileName="test-upload.png"
        onError={onError}
        onSuccess={onSuccess}
        useUniqueFileName={true}
        onUploadProgress={onUploadProgress}
        onUploadStart={onUploadStart}
        ref={isUploadRef}
        className="hidden"
      />
      {
        <label onClick={() => isUploadRef.current.click()}>
          <img
            src="https://github.com/safak/chatgpt-clone/blob/completed/client/public/attachment.png?raw=true"
            className="h-6 cursor-pointer"
          />
        </label>
      }
    </IKContext>
  );
};

export default Upload;
