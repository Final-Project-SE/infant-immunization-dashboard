import config from "@/configs/config";
import axios from "axios";
async function getMotherById(motherId: any) {
  try {
    // const res = await axios.get(`${config.BASE_URL}/hs/info/detail/info`);
    const res = await axios.get(`${config.BASE_URL}/user/mother/${motherId}`);

    const mother = res.data;
    return mother;
  } catch (error: any) {
    console.error("Error:", error);
    const errorMsg = error.response
      ? error.response.data.message
      : error.message;
    throw new Error(errorMsg);
  }
}

export default getMotherById;
