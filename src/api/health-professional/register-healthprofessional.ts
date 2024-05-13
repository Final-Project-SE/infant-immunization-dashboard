import config from "@/configs/config";
import axios from "axios";

async function registerHealthProfessional(hpData: any) {
  console.log(config.BASE_URL);
  try {
    const res = await axios.post(
      `${config.BASE_URL}/user/employee`,
      JSON.stringify(hpData),
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: config.AUTH_TOKEN,
        },
      }
    );

    const healthStation = res.data;
    return healthStation;
  } catch (error: any) {
    console.error(error);
    const errorMsg = error.response
      ? error.response.data.message
      : error.message;
    throw new Error(errorMsg);
  }
}

export default registerHealthProfessional;
