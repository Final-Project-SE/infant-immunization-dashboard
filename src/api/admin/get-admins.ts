import config from "@/configs/config";
import axios from "axios";

async function getAdmins() {
  try {
    const res = await axios.get(`${config.BASE_URL}/admin`, {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6Ik1BTkFHRVIiLCJmaXJzdE5hbWUiOiJBbWFudWVsIiwiaWF0IjoxNzExNzQxMjYwfQ.0GlbjQiJza4D0i9MH4iUA9woBlRe5Rtc3opIvc4QZxE",
      },
    });

    const admins = res.data;
    return admins;
  } catch (error: any) {
    console.error("Error:", error);
    const errorMsg = error.response
      ? error.response.data.message
      : error.message;
    throw new Error(errorMsg);
  }
}

export default getAdmins;
