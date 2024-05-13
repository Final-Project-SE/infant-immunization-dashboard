import config from "@/configs/config";
import axios from "axios";
import { TreatmentInformation } from "@/utils/types/component";

async function createTreatmentInformation(ti: TreatmentInformation) {
  try {
    const res = await axios.post(`${config.BASE_URL}/hs/info`, ti, {
      headers: {
        Authorization: config.AUTH_TOKEN,
      },
    });
    return res.data;
  } catch (error: any) {
    const errorMsg = error.response
      ? error.response.data.message
      : error.message;
    throw new Error(errorMsg);
  }
}

async function deleteOneTreatmentInformation(id: string | number) {
  try {
    const res = await axios.delete(`${config.BASE_URL}/treatment-info/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: config.AUTH_TOKEN,
      },
    });
    return res.data;
  } catch (error: any) {
    const errorMsg = error.response
      ? error.response.data.message
      : error.message;
    throw new Error(errorMsg);
  }
}

async function getAllTreatmentInformations() {
  try {
    const res = await axios.get(`${config.BASE_URL}/hs/info/all`);
    return res.data.data;
  } catch (error: any) {
    const errorMsg = error.response
      ? error.response.data.message
      : error.message;
    throw new Error(errorMsg);
  }
}

async function getSingleTreatmentInformation(id: string | number) {
  try {
    const res = await axios.get(`${config.BASE_URL}/hs/info/${id}`);
    return res.data;
  } catch (error: any) {
    const errorMsg = error.response
      ? error.response.data.message
      : error.message;
    throw new Error(errorMsg);
  }
}

async function updateTreatmentInformation(id: string | number, ti: TreatmentInformation) {
  try {
    const res = await axios.put(`${config.BASE_URL}/treatment-info/${id}`, ti, {
      headers: {
        "Content-Type": "application/json",
        Authorization: config.AUTH_TOKEN,
      },
    });
    return res.data;
  } catch (error: any) {
    const errorMsg = error.response
      ? error.response.data.message
      : error.message;
    throw new Error(errorMsg);
  }
}

export { createTreatmentInformation, deleteOneTreatmentInformation, getAllTreatmentInformations, getSingleTreatmentInformation, updateTreatmentInformation };