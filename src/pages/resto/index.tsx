import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "@/src/components/layout";

import AddMenu from "./addMenu";
import { GetMenuRequest } from "@/src/redux/action/resto/restoMenuAction";
import { GetAllMenuResto } from "@/src/api/resto/resto-menu";
import toast, { Toaster } from "react-hot-toast";
import Modal from "./addMenu2";
import UploadMenu from "./uploadMenu";
export default function Index() {
  const dispatch = useDispatch();
  const [display, setDisplay] = useState<any>(false);
  const [refresh, setRefresh] = useState<any>(false);
  const [displayEdit, setDisplayEdit] = useState<any>(false);
  const [displayUploadFoto, setDisplayUploadFoto] = useState<any>(false);
  const { menus } = useSelector((state: any) => state.restoMenuState);
  const [id, setId] = useState<any>();

  useEffect(() => {
    dispatch(GetMenuRequest());
    setRefresh(false);
  }, [refresh]);

  // const onDelete = async (id: any) => {
  //   dispatch(DelStockRequest(id));
  //   window.alert( Successfully Delete");
  //   setRefresh(!refresh);
  //   setDisplay(false);
  // };

  const onClick = (id: any) => {
    setDisplayEdit(true);
    setId(id);
  };

  // const [itemOffset, setItemOffset] = useState(0);

  // const endOffset = itemOffset + 5;
  // const currentItems = stocks.slice(itemOffset, endOffset);
  // const pageCount = Math.ceil(stocks.length / 5);

  // const handlePageClick = (event: any) => {
  //   const newOffset = (event.selected * 5) % stocks.length;
  //   setItemOffset(newOffset);
  // };
  return (
    <Layout>
      <div>
        <Toaster></Toaster>
        <div className="py-20 px-10">
          <div className="flex flex-row">
            <div className="basis-11/12">
              <form>
                <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="find Your favorit Menu <3"
                    required
                  />
                  <button
                    type="submit"
                    className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>
            <div className="basis-1/4 pl-4">
              <div className="dropdown">
                <label tabIndex={0} className="btn btn-outline btn-info">
                  Price Filter
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a className="hover:bg-sky-700">Price Low To High</a>
                  </li>
                  <li>
                    <a className="hover:bg-sky-700">Peice Hith to Low</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg py-3">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3 text-white">
                    ID
                  </th>
                  <th scope="col" className="px-6 py-3  text-white">
                    Nama Menu
                  </th>
                  <th scope="col" className="px-6 py-3  text-white">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3  text-white">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3  text-white">
                    {display && <Modal setDisplay={setDisplay} />}
                    <button onClick={() => setDisplay(true)}>+ Add</button>
                  </th>
                </tr>
              </thead>
              <tbody>
                {menus?.data &&
                  menus.data.map((items: any) => (
                    <tr
                      key={items.remeId}
                      className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {items.remeId}
                      </th>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {items.remeName}
                      </th>
                      <td className="px-6 py-4"> {items.remePrice}</td>
                      <td className="px-6 py-4">
                        {" "}
                        {items.remeStatus ?? "kosong"}
                      </td>
                      <td className="px-6 py-4">
                        <div className="dropdown">
                          <button
                            className="btn btn-xs btn-outline btn-info"
                            type="button"
                          >
                            ?
                          </button>
                          <ul
                            tabIndex={0}
                            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                          >
                            <li>
                              <a className="hover:bg-sky-500 text-white">
                                Edit
                              </a>
                            </li>
                            <li>
                              {displayUploadFoto && (
                                <UploadMenu
                                  setDisplay={setDisplay}
                                  id={items.remeId}
                                />
                              )}
                              <button
                                onClick={() => setDisplayUploadFoto(true)}
                              >
                                upload Menu
                              </button>
                              <a className=" hover:bg-sky-500  text-white">
                                {display && (
                                  <UploadMenu
                                    setDisplay={setDisplay}
                                    id={items.remeId}
                                  />
                                )}
                                <button onClick={() => setDisplay(true)}>
                                  upload Menu
                                </button>
                                Upload Image
                              </a>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <div className="py-1 container mx-auto">
              <span className="text-sm text-gray-700 dark:text-gray-400">
                Showing{" "}
                <span className="font-semibold text-gray-900 dark:text-white">
                  1
                </span>{" "}
                to{" "}
                <span className="font-semibold text-gray-900 dark:text-white">
                  10
                </span>{" "}
                of{" "}
                <span className="font-semibold text-gray-900 dark:text-white">
                  100
                </span>{" "}
                Entries
              </span>
            </div>
            <div className="py-3 container mx-auto">
              <div className="btn-group">
                <button className="btn btn-sm ">Prev</button>
                <button className="btn btn-sm btn-active">1</button>
                <button className="btn btn-sm btn-active">2</button>
                <button className="btn btn-sm">3</button>
                <button className="btn btn-sm">4</button>
                <button className="btn btn-sm">Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
