import React from "react";

const Customers = () => {
  return (
    <>
      <div className="flex flex-col w-full border-opacity-50">
        <div className="grid h-20 card bg-indigo-500 text-white rounded-box place-items-center">
          {" "}
          <h2 className="text-3xl font-bold">Advance Search</h2>
          <h3>Search Customers withs advance filters</h3>
        </div>
      </div>
      <div className="overflow-x-auto pt-5">
        <h2 className="text-3xl font-bold mb-4">Customers List</h2>
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="text-center">
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Buisness Name</th>
              <th className="py-2 px-4 border-b">Phone</th>
              <th className="py-2 px-4 border-b">Group</th>
            </tr>
          </thead>
          <tbody>
            {/* Example data */}
            <tr className="text-center">
              <td className="py-2 px-4 border-b">1</td>
              <td className="py-2 px-4 border-b">Handge Fishes</td>
              <td className="py-2 px-4 border-b">980000000000</td>
              <td className="py-2 px-4 border-b">Nasik</td>
            </tr>
            <tr className="text-center">
              <td className="py-2 px-4 border-b">2</td>
              <td className="py-2 px-4 border-b">Bilasdi</td>
              <td className="py-2 px-4 border-b">018256551</td>
              <td className="py-2 px-4 border-b">Narsingdi</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Customers;
