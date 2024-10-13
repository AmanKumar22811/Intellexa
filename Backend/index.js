import express from "express";
import cors from "cors";
import ImageKit from "imagekit";
import mongoose from "mongoose";

const port = process.env.PORT || 3000;
const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
  })
);

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB successfully");
  } catch (error) {
    console.log(error);
  }
};

app.get("/api/upload", (req, res) => {
  var result = imagekit.getAuthenticationParameters();
  res.send(result);
});

const imagekit = new ImageKit({
  urlEndpoint: process.env.IMAGE_KIT_ENDPOINT,
  publicKey: process.env.IMAGE_KIT_PUBLIC_KEY,
  privateKey: process.env.IMAGE_KIT_PRIVATE_KEY,
});

app.listen(port, () => {
  connect();
  console.log(`Server running on port ${port}...`);
});
