import config from "@/configs/config";
import axios from "axios";

async function getChildren() {
  try {
    const res = await axios.get(`${config.BASE_URL}/child/`, {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwicm9sZSI6IlJFQ0VQVElPTiIsImZpcnN0TmFtZSI6IlRheWUiLCJpYXQiOjE3MTUxMDk4MzZ9.Hfo9g_O4j4bft15TfJ6VsW0upp6KscKcDIVsOsxoWGI",
      },
    });

    const children = res.data;
    return children;
  } catch (error: any) {
    console.error("Error:", error);
    const errorMsg = error.response
      ? error.response.data.message
      : error.message;
    throw new Error(errorMsg);
  }
}

export default getChildren;