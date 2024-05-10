import axios from "axios";

const BASE_URL = import.meta.env.VITE_API;
console.log(BASE_URL);

type UserCredentialProps = {
  email: string;
  password: string;
};

const login = async (userCredentials: UserCredentialProps) => {
  return await axios.post(`${BASE_URL}/admin/login`, userCredentials);
};

export { login };
