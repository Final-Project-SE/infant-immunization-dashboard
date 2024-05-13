import config from "@/configs/config";
import axios from "axios";

async function getChildById(childId: number) {
  try {
    const res = await axios.get(`${config.BASE_URL}/child/${childId}`, {});

    const children = res.data;
    return children;
  } catch (error: any) {
    console.error("Error:", error);
    const errorMsg = error.response
      ? error.response.data.message
      : error.message;
    throw new Error(errorMsg);
  }
}

export default getChildById;
