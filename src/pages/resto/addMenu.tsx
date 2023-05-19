import { SyntheticEvent, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik, FormikProvider, Field } from "formik";
import { CreateMenuRequest } from "@/src/redux/action/resto/restoMenuAction";
import { useRouter } from "next/router";
import { CreateMenuResto } from "@/src/api/resto/resto-menu";
import toast, { Toaster } from "react-hot-toast";
import { AxiosError } from "axios";

const notify = () => toast("Here is your toast.");
const exampleData = {
  remeId: 71,
  remeName: "Green boba 7",
  remeDescription: "Green Tea sawdawdaaedap",
  remePrice: "$25,500.00",
  remeStatus: "AVAILABLE",
  remeModifiedDate: "2023-05-14T03:34:23.020Z",
};
export default function AddMenu(props: any) {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [remeName, setremeName] = useState("");
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      remeName: "",
      remeDescription: "",
      remePrice: "",
      remeStatus: "",
    },
    onSubmit: async (values: any) => {
      console.log(values);
      dispatch(CreateMenuRequest(values));
      props.setDisplay(false);
      window.alert("Data Successfully Insert");
      props.setRefresh(true);
    },
    // onSubmit: async () => {
    //   const payload = {
    //     remeName: formik.values.remeName,
    //     remeDescription: formik.values.remeDescription,
    //     remePrice: `$${formik.values.remePrice}.00`,
    //     remeStatus: formik.values.remeStatus,
    //   };

    // await CreateMenuResto(payload)
    //   .then(() => {
    //     props.setRefrash(true);
    //     toast.success("Good job");
    //   })
    //   .catch((err) => {
    //     if (err instanceof AxiosError) {
    //       const cek = err.response?.data.message;

    //       toast.error("ups");
    //       alert();
    //     }
    //   });
    // },
  });

  const handleForm = (event: any) => {
    const { target } = event;
    formik.setFieldValue(target.name, target.value);
  };
  const notify = () => toast.error("Here is your toast.");
  function handleChange() {
    setModal(!modal);
  }
  return (
    <div>
      <button
        className="btn btn-xs btn-outline btn-success"
        onClick={handleChange}
      >
        Add Menu
      </button>
      <input
        checked={modal}
        onChange={handleChange}
        type="checkbox"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box">
          <Toaster />
          <h3 className="font-bold text-lg">Add Menu</h3>
          <form onSubmit={formik.handleSubmit}>
            <div className="from-control">
              <label className=" label font-medium">Nama Menu</label>
              <input
                onChange={handleForm}
                type="text"
                name="remeName"
                className="textarea textarea-info w-full font-medium"
                placeholder="Masukan Nama Menu"
              />
              <label className=" label font-medium">Description Menu</label>
              <textarea
                onChange={handleForm}
                className="textarea textarea-info w-full"
                placeholder="Description Menu kamu"
                name="remeDescription"
              ></textarea>
              <label className="label font-bold">Price</label>
              <input
                onChange={handleForm}
                type="number"
                name="remePrice"
                className="textarea textarea-info w-full font-medium"
                placeholder="Masukan Nama Price"
              />
              <label className="label font-medium">Status Menu</label>
              <div className="flex items-center pl-4 rounded dark:border-gray-700 py">
                <input
                  onChange={handleForm}
                  id="bordered-checkbox-2"
                  type="checkbox"
                  value="AVAILABLE"
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
            <div className="modal-cation flex flex-auto">
              <button
                className="btn btn-sm "
                onClick={() => props.setDisplay(false)}
              >
                Close
              </button>
              <button type="submit" className="btn btn-primary btn-sm">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
