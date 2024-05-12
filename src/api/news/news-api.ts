import config from "@/configs/config";
import axios from "axios";
import { News } from "@/utils/types/component";

async function createNews(news: News) {
  try {
    const res = await axios.post(`${config.BASE_URL}/news`, news,{
      headers:{
        "Content-Type": "application/json",      
  Authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6IlNVUEVSIiwiZmlyc3ROYW1lIjoiU3VwZXIiLCJpYXQiOjE3MTU1Mzg3NDJ9.gHpV_rZ7bz9el2Jx9P6OJ8Fq3JN9w99Hf6kwRZ8hddY",
      }
    });
    return res.data;
  } catch (error: any) {
    const errorMsg = error.response
      ? error.response.data.message
      : error.message;
    throw new Error(errorMsg);
  }
}

async function deleteNews(id: string | number) {
  try {
    const res = await axios.delete(`${config.BASE_URL}/news/${id}`,{
      headers:{
        "Content-Type": "application/json",      
  Authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6IlNVUEVSIiwiZmlyc3ROYW1lIjoiU3VwZXIiLCJpYXQiOjE3MTU1Mzg3NDJ9.gHpV_rZ7bz9el2Jx9P6OJ8Fq3JN9w99Hf6kwRZ8hddY",
      }
    });

    return res.data;
  } catch (error: any) {
    const errorMsg = error.response
      ? error.response.data.message
      : error.message;
    throw new Error(errorMsg);
  }
}

async function getAllNews() {
  try {
    const res = await axios.get(`${config.BASE_URL}/news/`);
    return res.data;
  } catch (error: any) {
    const errorMsg = error.response
      ? error.response.data.message
      : error.message;
    throw new Error(errorMsg);
  }
}

async function getSingleNews(id: string | number) {
  try {
    const res = await axios.get(`${config.BASE_URL}/news/${id}`);
    return res.data;
  } catch (error: any) {
    const errorMsg = error.response
      ? error.response.data.message
      : error.message;
    throw new Error(errorMsg);
  }
}

async function updateNews(id: string | number, news: News) {
  try {
    // const res = await axios.put(`${config.BASE_URL}/news/${id}`, news, {
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: config.AUTH_TOKEN,
    //   },
    // });
    const res = await axios.put(`${config.BASE_URL}/news/${id}`, news, {
      headers:{
        "Content-Type": "application/json",      
  Authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6IlNVUEVSIiwiZmlyc3ROYW1lIjoiU3VwZXIiLCJpYXQiOjE3MTU1Mzg3NDJ9.gHpV_rZ7bz9el2Jx9P6OJ8Fq3JN9w99Hf6kwRZ8hddY",
      }
    })
    return res.data;
  } catch (error: any) {
    const errorMsg = error.response
      ? error.response.data.message
      : error.message;
    throw new Error(errorMsg);
  }
}

export { createNews, deleteNews, getAllNews, getSingleNews, updateNews };
