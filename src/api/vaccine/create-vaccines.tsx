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
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6IlNVUEVSIiwiZmlyc3ROYW1lIjoiTmF0bmFlbCIsImlhdCI6MTcxNDk3NjQ1OCwiZXhwIjoxNzE3NTY4NDU4fQ.-1rB4Ci6hsFJ8aZVL8uVQMoQPoVMFsVC282AHmv-S8U",
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