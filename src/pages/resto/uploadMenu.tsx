import { CreateMenuRequest } from "@/src/redux/action/resto/restoMenuAction";
import { useFormik } from "formik";
import React from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";

export default function UploadMenu(props: any) {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      remeName: "",
      remeDescription: "",
      remePrice: "",
      remeStatus: "",
    },
    onSubmit: async (values: any) => {
      values.remePrice = `$${values.remePrice}.00`;
      values.remeStatus = values.remeStatus[0];
      dispatch(CreateMenuRequest(values));
      props.setDisplay(false);
      toast.success("Yeay Your Menu Created 🔥");
      // window.alert("Data Successfully Insert");
      props.setRefresh(true);
    },
  });

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl w-full">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h2 className="text-3xl font-semibold text-black">Upload Menu</h2>
            </div>
            {/*body*/}
            <div>
              <div className="flex items-center justify-center p-12">
                <div>
                  <form onSubmit={formik.handleSubmit}>
                    <div className="flex flex-wrap -mx-3 mb-6">
                      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="mb-3 block text-base font-medium text-[#07074D]">
                          nama
                        </label>
                        <input
                          id="remeName"
                          name="remeName"
                          onChange={formik.handleChange}
                          type="text"
                          placeholder="Stock"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                        <label className="mb-3 block text-base font-medium text-[#07074D]">
                          P awdwarice
                        </label>
                        <input
                          id="remePrice"
                          name="remePrice"
                          onChange={formik.handleChange}
                          type="number"
                          min="0"
                          placeholder="0"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />

                        <div className="py-5">
                          <input
                            onChange={formik.handleChange}
                            id="remeStatus"
                            type="checkbox"
                            value="AVAILABLE (Ready to Serve)"
                            name="remeStatus"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            htmlFor="bordered-checkbox-2"
                            className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Available
                          </label>
                        </div>
                      </div>
                      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="mb-3 block text-base font-medium text-[#07074D]">
                          Desc
                        </label>
                        <textarea
                          name="remeDescription"
                          id="remeDescription"
                          cols="30"
                          rows="5"
                          type="text"
                          placeholder="Describe your Product"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        ></textarea>
                      </div>
                      <div className="flex items-center pl-4 rounded dark:border-gray-700 py"></div>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
                      >
                        Submit
                      </button>
                      <button
                        onClick={() => props.setDisplay(false)}
                        className="mx-2 hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
