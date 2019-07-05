import { get } from "axios";

// const app = document.getElementById("app");
const API = "https://dog.ceo/api/breed/hound/images/random";

const getDogImage = async () => {
  const image = await get(API).then(r => r);
  return image.data.message;
};

const newImage = src => {
  const img = document.createElement("img");
  img.src = src;
  document.body.appendChild(img);
};

getDogImage().then(newImage);
