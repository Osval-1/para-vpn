import axios from "axios";
import Constants from "expo-constants";

export const uri =
  Constants.expoConfig?.hostUri?.split(":").shift()?.concat(":8000") ??
  "yourapi.com";
export const getServer = async () => {
  const response = await axios.get(`http://${uri}/server/get`);
  return response.data;
};
