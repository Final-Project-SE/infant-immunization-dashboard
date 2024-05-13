import config from "@/configs/config";
import axios from "axios";

async function getChildrenByMother(motherId: number) {
  try {
    const res = await axios.get(`${config.BASE_URL}/child/mother/${motherId}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjIsInJvbGUiOiJIRUFMVEhfUFJPRkVUSU9OQUwiLCJmaXJzdE5hbWUiOiJrZWJlYnVzaCIsImlhdCI6MTcxNTUyMDE0MH0.VeOAY6wfPUMNIB06TQSu7oKUAzPRbj4dcUH9QsLvNnU",
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

export default getChildrenByMother;
