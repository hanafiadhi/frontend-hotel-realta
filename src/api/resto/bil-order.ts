import axios from "axios";
import config from "@/src/config/config";

export const CreateBilOrder = async (payload: any) => {
  try {
    const result = await axios.post(
      `${config.backend}/resto-menu/create-bil`,
      payload
    );
    return result.data;
  } catch (error) {
    return error;
  }
};
