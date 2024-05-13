import config from "@/configs/config";
import axios from "axios";

async function getAdmins() {
  try {
    const res = await axios.get(`${config.BASE_URL}/admin`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: config.AUTH_TOKEN,
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
