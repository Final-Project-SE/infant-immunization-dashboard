import config from "@/configs/config";
import axios from "axios";
async function getVaccinationsOfChild(childId: number) {
  try {
    // const res = await axios.get(`${config.BASE_URL}/hs/info/detail/info`);
    const res = await axios.get(
      `${config.BASE_URL}/vaccine/child/child/${childId}`
    );
    console.log(res);

    const vaccinations = res.data;
    return vaccinations;
  } catch (error: any) {
    console.error("Error:", error);
    const errorMsg = error.response
      ? error.response.data.message
      : error.message;
    throw new Error(errorMsg);
  }
}

export default getVaccinationsOfChild;
