import { axiosInst } from './axiosConfig';

export const getUserList = async () => {
  try {
    const { data } = await axiosInst.get('user/list');

    return data;
  } catch (error) {
    console.log(error);
  }
};
