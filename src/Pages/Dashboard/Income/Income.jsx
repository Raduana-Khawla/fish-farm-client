import React from "react";

const Income = () => {
  return (
    <>
      <div className="flex flex-col w-full border-opacity-50">
        <div className="grid h-20 card bg-indigo-500 text-white rounded-box place-items-center">
          {" "}
          <h2 className="text-3xl font-bold">Advance Search</h2>
          <h3>Search Expense withs advance filters</h3>
        </div>
      </div>
      <div className="overflow-x-auto pt-5">
        <h2 className="text-3xl font-bold mb-4">Expense List</h2>
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="text-center">
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Pond Name</th>
              <th className="py-2 px-4 border-b">Area</th>
              <th className="py-2 px-4 border-b">City</th>
            </tr>
          </thead>
          <tbody>
            {/* Example data */}
            <tr className="text-center">
              <td className="py-2 px-4 border-b">1</td>
              <td className="py-2 px-4 border-b">Bishakha</td>
              <td className="py-2 px-4 border-b">Gabtoli</td>
              <td className="py-2 px-4 border-b">Narsingdi</td>
            </tr>
            <tr className="text-center">
              <td className="py-2 px-4 border-b">2</td>
              <td className="py-2 px-4 border-b">Bilasdi</td>
              <td className="py-2 px-4 border-b">Hasnabad</td>
              <td className="py-2 px-4 border-b">Narsingdi </td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Income;
