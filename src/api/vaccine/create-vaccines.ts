import config from "@/configs/config";
import axios from "axios";

type VaccineType = "COVID-19" | "FLU" | "HEPATITIS" | "MEASLES" | "MUMPS" | "RUBELLA" | "POLIO" | "TETANUS" | "DIPHTHERIA" | "PERTUSSIS";

type VaccineDto = {
  name: string;
  type: VaccineType;
  description: string;
  dose: string;
  duration: string;
  ageRange: string;
};

async function createVaccine(reqBody: VaccineDto) {
  console.log(reqBody);

  try {
    const res = await axios.post(
      `${config.BASE_URL}/vaccines`,
      JSON.stringify(reqBody),
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: config.AUTH_TOKEN,
        },
      }
    );

    const vaccine = res.data;
    return vaccine;
  } catch (error: any) {
    console.error(error);
    const errorMsg = error.response
      ? error.response.data.message
      : error.message;
    throw new Error(errorMsg);
  }
}

export default createVaccine;