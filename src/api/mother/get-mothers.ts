import config from "@/configs/config";
import axios from "axios";

async function getMothers() {
  try {
    // const res = await axios.get(`${config.BASE_URL}/hs/info/detail/info`);
    const res = await axios.get(`${config.BASE_URL}/user/mother/hs/my`, {
      headers: {
        "Content-Type": "application/json",
        // later to be obtained from local storage
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwicm9sZSI6IlJFQ0VQVElPTiIsImZpcnN0TmFtZSI6IlRheWUiLCJpYXQiOjE3MTUxMDk4MzZ9.Hfo9g_O4j4bft15TfJ6VsW0upp6KscKcDIVsOsxoWGI",
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

export default getMothers;
