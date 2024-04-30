import config from "@/configs/config";
import axios from "axios";
async function getAllHealthStations() {
  try {
    const res = await axios.get(`${config.BASE_URL}/hs/info/detail/info`);

    const healthStations = res.data;
    return healthStations;
  } catch (error: any) {
    console.error("Error:", error);
    const errorMsg = error.response
      ? error.response.data.message
      : error.message;
    throw new Error(errorMsg);
  }
}

export default getAllHealthStations;
