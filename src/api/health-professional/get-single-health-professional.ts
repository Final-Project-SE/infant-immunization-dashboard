import config from "@/configs/config";
import axios from "axios";
async function getSingleHP(hpid: any) {
  try {
    // const res = await axios.get(`${config.BASE_URL}/hs/info/detail/info`);
    const res = await axios.get(`${config.BASE_URL}/user/employee/${hpid}`, {
      headers: {
        "Content-Type": "application/json",
        // later to be obtained from local storage
        Authorization: config.AUTH_TOKEN,
      },
    });
    console.log(res);

    const healthStation = res.data;
    return healthStation;
  } catch (error: any) {
    console.error("Error:", error);
    const errorMsg = error.response
      ? error.response.data.message
      : error.message;
    throw new Error(errorMsg);
  }
}

export default getSingleHP;
