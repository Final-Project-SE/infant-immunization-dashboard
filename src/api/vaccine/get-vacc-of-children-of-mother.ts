import config from "@/configs/config";
import axios from "axios";
async function getVaccinesOfChildrenOfMother(motherId: number) {
  try {
    // const res = await axios.get(`${config.BASE_URL}/hs/info/detail/info`);
    const res = await axios.get(
      `${config.BASE_URL}/vaccine/child/mother/${motherId}`
    );
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

export default getVaccinesOfChildrenOfMother;
