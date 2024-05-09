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
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6IlNVUEVSIiwiZmlyc3ROYW1lIjoiTmF0bmFlbCIsImlhdCI6MTcxNDk3NjQ1OCwiZXhwIjoxNzE3NTY4NDU4fQ.-1rB4Ci6hsFJ8aZVL8uVQMoQPoVMFsVC282AHmv-S8U",
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
