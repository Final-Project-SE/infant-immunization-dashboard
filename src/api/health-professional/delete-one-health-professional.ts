import config from "@/configs/config";
import axios from "axios";
async function deleteOneHP(hsid: string | number) {
  try {
    // const res = await axios.get(`${config.BASE_URL}/hs/info/detail/info`);
    const res = await axios.delete(`${config.BASE_URL}/user/employee/${hsid}`, {
      headers: {
        "Content-Type": "application/json",

        // later to be obtained from local storage
        Authorization: config.AUTH_TOKEN,
      },
    });
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

export default deleteOneHP;
