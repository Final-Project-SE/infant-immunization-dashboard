import dotenv from "dotenv";
dotenv.config({
  path: ".env",
});

export default {
  BASE_URL: process.env.BASE_URL as string,
};
