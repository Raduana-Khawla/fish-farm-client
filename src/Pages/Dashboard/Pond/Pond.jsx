import React from "react";

const Pond = () => {
  return (
    <div className="">
      <div className="flex flex-col w-full border-opacity-50">
        <div className="grid h-20 card bg-indigo-500 mt-2 text-white rounded-box place-items-center">
          <h2 className="text-3xl font-bold ">Advance Search</h2>
          <h3>Search Ponds withs advance filters</h3>
        </div>
      </div>
      <div className="overflow-x-auto pt-5">
        <h2 className="text-3xl font-bold mb-4">Pond List</h2>
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="text-center">
              <th className="  text-[14px] py-2  border-b  md:text-base md:px-4">
                ID
              </th>
              <th className="text-[14px]  px-0 py-2  border-b md:text-base md:px-4">
                Pond Name
              </th>
              <th className="text-[14px] py-2 px-0 border-b  md:text-base md:px-4">
                Area
              </th>
              <th className="text-[14px] py-2 px-4 border-b md:text-base md:px-4">
                City
              </th>
            </tr>
          </thead>
          <tbody>
            {/* Example data */}
            <tr className="text-center">
              <td className="text-[14px] px-0 py-2  border-b md:text-base md:px-4">
                1
              </td>
              <td className="text-[14px] px-0 py-2  border-b md:text-base md:px-4">
                Bishakha
              </td>
              <td className="text-[14px] px-0 py-2  border-b md:text-base md:px-4">
                Gabtoli
              </td>
              <td className="text-[14px] px-0 py-2  border-b md:text-base md:px-4">
                Narsingdi
              </td>
            </tr>
            <tr className="text-center">
              <td className="text-[14px] px-0 py-2  border-b md:text-base md:px-4">
                2
              </td>
              <td className="text-[14px] px-0 py-2  border-b md:text-base md:px-4">
                Bilasdi
              </td>
              <td className="text-[14px] px-0 py-2  border-b md:text-base md:px-4">
                Hasnabad
              </td>
              <td className="text-[14px] px-0 py-2  border-b md:text-base md:px-4">
                Narsingdi{" "}
              </td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Pond;
