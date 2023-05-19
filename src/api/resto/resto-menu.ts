import axios from "axios";
import config from "@/src/config/config";
export interface Page {
  search?: string;

  order?: string;

  page?: number;

  take?: number;
}
export const GetAllMenuResto = async () => {
  try {
    //localhost:3000/resto-menu/?page=4&take=50&order=DESC&search=BOBA
    // const result = await axios.get(
    //   `${config.backend}resto-menu/?page=${payload?.page}&take=${payload?.take}&order=${payload?.order}&search=${payload?.search}`
    // );
    const result = await axios.get(`${config.backend}resto-menu/`);
    return result.data;
  } catch (error) {
    return error;
  }
};
export const GetOneMenuResto = async (id: number) => {
  try {
    const result = await axios.get(`${config.backend}/resto-menu/${id}`);
    return result.data;
  } catch (error) {
    return error;
  }
};
export const CreateMenuResto = async (payload: any) => {
  try {
    console.log(payload);
    const result = await axios.post(`${config.backend}resto-menu/`, payload);
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
    return error;
  }
};
export const UpdateMenuResto = async (payload: any) => {
  try {
    const result = await axios.patch(
      `${config.backend}/resto-menu/${payload.id}`,
      payload
    );
    return result;
  } catch (error) {
    return error;
  }
};
export const DeleteMenuResto = async (id: number) => {
  try {
    const result = await axios.delete(`${config.backend}/resto-menu/${id}`);
    return result.data;
  } catch (error) {
    return error;
  }
};
