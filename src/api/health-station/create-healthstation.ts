import config from "@/configs/config";
import axios from "axios";

type HealthStationType =
  | "GENERAL_HOSPITAL"
  | "CLINIC"
  | "HEALTH_CENTER"
  | "SPECIALTY_HOSPITAL"
  | "REHABILITATION_CENTER"
  | "DIAGNOSTIC_CENTER"
  | "MATERNITY_HOSPITAL"
  | "PSYCHIATRIC_HOSPITAL"
  | "MEDICAL_LABORATORY"
  | "PHARMACY"
  | "PEDIATRIC_CLINIC"
  | "SPORTS_MEDICINE_CLINIC"
  | "CHIROPRACTIC_CLINIC"
  | "VETERINARY_CLINIC";

type HealthStationDto = {
  name: string;
  email: string;
  type: string;
  city: string;
  subcity: string;
  kebele: string;
  houseNumber: string;
  imageUrl: string;
};

async function CreateHealthStation(reqBody: HealthStationDto) {
  console.log(reqBody);

  try {
    // const res = await fetch("http://localhost:7777/api/hs", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     authorization:
    //       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6IlNVUEVSIiwiZmlyc3ROYW1lIjoiTmF0bmFlbCIsImlhdCI6MTcxNDk3NjQ1OCwiZXhwIjoxNzE3NTY4NDU4fQ.-1rB4Ci6hsFJ8aZVL8uVQMoQPoVMFsVC282AHmv-S8U",
    //   },
    //   body: JSON.stringify(reqBody),
    // });

    const res = await axios.post(
      // `${config.BASE_URL}/hs`,
      "http://localhost:7777/api/hs",
      JSON.stringify(reqBody),
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: config.AUTH_TOKEN,
        },
      }
    );
    // console.log(res);
    // const healthStation = await res.json();
    // return healthStation;

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

export default CreateHealthStation;
