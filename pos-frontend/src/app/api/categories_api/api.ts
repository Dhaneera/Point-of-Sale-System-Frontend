import api from "@/app/lib/axios";
import axios from "axios";

export const getAllcategories = async () => {
  try {
    const url:any = process.env.NEXT_PUBLIC_GET_ALL_CATEGORIES;
    const promise = await api.get(url);
    return promise.data;
  } catch (error) {
    return Promise.reject;
  }
};

export const deleteCategoriesByName = async (name: any) => {
  try {
    const url:any = process.env.NEXT_PUBLIC_DELETE_CATEGORIES+name;
    const promise = await api.delete(url);
    return promise.data;
  } catch (error) {
    return Promise.reject("something went wrong");
  }
};

export const addCategories = async (data: any) => {
  try {
    const url:any = process.env.NEXT_PUBLIC_ADD_CATEGORIES;
    const promise = await api.post(url, data);
    return promise.data;
  } catch (error) {
    return Promise.reject("something went wrong");
  }
};
