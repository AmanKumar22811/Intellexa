import express from "express";
import cors from "cors";
import ImageKit from "imagekit";

const port = process.env.PORT || 3000;
const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
  })
);

app.get("/api/upload", (req, res) => {
  var result = imagekit.getAuthenticationParameters();
  res.send(result);
});

const imagekit = new ImageKit({
  urlEndpoint: process.env.IMAGE_KIT_ENDPOINT,
  publicKey: process.env.IMAGE_KIT_PUBLIC_KEY,
  privateKey: process.env.IMAGE_KIT_PRIVATE_KEY,
});

app.listen(port, () => console.log(`Server running on port ${port}...`));
