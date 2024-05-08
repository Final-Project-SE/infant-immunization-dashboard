import config from "@/configs/config";
import axios from "axios";
async function deleteOneHP(hsid: string | number) {
  try {
    // const res = await axios.get(`${config.BASE_URL}/hs/info/detail/info`);
    const res = await axios.delete(`${config.BASE_URL}/user/employee/${hsid}`, {
      headers: {
        "Content-Type": "application/json",

        // later to be obtained from local storage
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6IlNVUEVSIiwiZmlyc3ROYW1lIjoiTmF0bmFlbCIsImlhdCI6MTcxNDk3NjQ1OCwiZXhwIjoxNzE3NTY4NDU4fQ.-1rB4Ci6hsFJ8aZVL8uVQMoQPoVMFsVC282AHmv-S8U",
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
