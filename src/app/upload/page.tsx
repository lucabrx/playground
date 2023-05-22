"use client"
import axios from "axios";
import { ChangeEvent } from "react";

async function uploadToS3(e: ChangeEvent<HTMLFormElement>) {
  const formData = new FormData(e.target);

  const file = formData.get("file");

  if (!file) {
    return null;
  }

  // @ts-ignore
  const fileType = file.type.split("/")[1];
  console.log(fileType)

  const { data } = await axios.get(`/api/upload?fileType=${fileType}`);

  const { uploadUrl, key } = data;

  await axios.put(uploadUrl, file);

  return key;
}

function Upload() {
  async function handleSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    const key = await uploadToS3(e);
  }

  return (
    <>
      <p>Please select file to upload</p>
      <form onSubmit={handleSubmit}>
        <input type="file" accept="image/jpeg image/png" name="file" />
        <button type="submit">Upload</button>
      </form>

      <div className="pt-5">
<img src="https://noname-social-network.s3.eu-central-1.amazonaws.com/583d8269-b2a6-45bd-a054-35bee44b6484.jpeg" className="w-32 h-32" />
      </div>
    </>
  );
}

export default Upload;