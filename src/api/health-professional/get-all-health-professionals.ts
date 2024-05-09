import config from "@/configs/config";
import axios from "axios";

async function getAllHealthProfessionals() {
  try {
    const res = await axios.get(
      `${config.BASE_URL}/user/employee/all?role=HEALTH_PROFETIONAL`,
      {
        headers: {
          "Content-Type": "application/json",

          // later to be taken from local storage
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6IlNVUEVSIiwiZmlyc3ROYW1lIjoiTmF0bmFlbCIsImlhdCI6MTcxNDk3NjQ1OCwiZXhwIjoxNzE3NTY4NDU4fQ.-1rB4Ci6hsFJ8aZVL8uVQMoQPoVMFsVC282AHmv-S8U",
        },
      }
    );

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

export default getAllHealthProfessionals;
