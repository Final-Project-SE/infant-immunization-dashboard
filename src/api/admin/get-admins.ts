import config from "@/configs/config";
import axios from "axios";

async function getAdmins() {
  try {
    const res = await axios.get(`${config.BASE_URL}/admin`, {
      headers: {
        "Content-Type": "application/json",

        // later to be fetched from local storage
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6IlNVUEVSIiwiZmlyc3ROYW1lIjoiTmF0bmFlbCIsImlhdCI6MTcxNTMzNjQ5NCwiZXhwIjoxNzE3OTI4NDk0fQ.4PjkyVRlXCG2OgUUejERK56QnaDO4ch5eq_ZEvg2yJs",
      },
    });

    const admins = res.data;
    return admins;
  } catch (error: any) {
    console.error("Error:", error);
    const errorMsg = error.response
      ? error.response.data.message
      : error.message;
    throw new Error(errorMsg);
  }
}

export default getAdmins;
