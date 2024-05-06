import config from "@/configs/config";
import axios from "axios";
async function deleteAllHealthStations(hsid: string | number) {
  try {
    // const res = await axios.get(`${config.BASE_URL}/hs/info/detail/info`);
    const res = await axios.delete(`${config.BASE_URL}/hs/all`);
    console.log(res);

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

export default deleteAllHealthStations;
