import React, { useEffect, useState } from "react";
import Layout from "@/src/components/layout";
import { link } from "fs";
import { GetAllMenuResto } from "@/src/api/resto/resto-menu";

export default function Index() {
  const [menus, setMenus] = useState<any>([]);
  const [page, setPage] = useState(0);
  const [take, setTake] = useState(0);
  const [itemsCount, setItemCount] = useState(0);
  const [pageCount, setpageCount] = useState(0);
  const [PreviousPage, setPreviousPage] = useState(Boolean);
  const [nextPage, setnextPage] = useState(Boolean);

  useEffect(() => {
    GetAllMenuResto().then((result) => setMenus(result));
  }, []);
  console.log(menus.data);
  return (
    <div>
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
                placeholder="Search Mockups, Logos..."
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
        <div className="basis-1/4">
          <div className="dropdown">
            <label tabIndex={0} className="btn m-1">
              Click
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg py-3">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Nama Menu
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {menus.data &&
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
                  <td className="px-6 py-4">{items.remePrice}</td>
                  <td className="px-6 py-4">{items.remeStatus ?? "kosong"}</td>
                  <td className="px-6 py-4">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
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
            {/* {menus.meta && menus.meta.map((Pagination: any) => (

            ))} */}
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
  );
}
