import axios from "axios";
import config from "@/src/config/config";

export const UploadFotoMenuResto = async (payload: any) => {
  try {
    const result = await axios.post(`${config.backend}/images/upload`, payload);
    return result.data;
  } catch (error) {
    return error;
  }
};
export const UpdateFotoMenuResto = async (payload: any) => {
  try {
    const result = await axios.patch(
      `${config.backend}/images/upload`,
      payload
    );
    return result.data;
  } catch (error) {
    return error;
  }
};
export const GetDataMenuRestoFoto = async (id: number) => {
  try {
    const result = await axios.get(
      `${config.backend}/images/resto-menu/foto/${id}`
    );
    return result.data;
  } catch (error) {
    return error;
  }
};
export const DeleteFotoMenuResto = async (id: number) => {
  try {
    const result = await axios.get(
      `${config.backend}/images/resto-menu/foto/${id}`
    );
    return result.data;
  } catch (error) {
    return error;
  }
};
