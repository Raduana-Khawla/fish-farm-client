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
        <h2 className="text-3xl font-bold mb-4">Income List</h2>
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="text-center">
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Fish Sell</th>
              <th className="py-2 px-4 border-b">Date</th>
              <th className="py-2 px-4 border-b">City</th>
            </tr>
          </thead>
          <tbody>
            {/* Example data */}
            <tr className="text-center">
              <td className="py-2 px-4 border-b">2</td>
              <td className="py-2 px-4 border-b">$39.5</td>
              <td className="py-2 px-4 border-b">28.02.2024</td>
              <td className="py-2 px-4 border-b">Sadarghat</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>

      <div className="overflow-x-auto pt-5">
        <h2 className="text-3xl font-bold mb-4">Total Income</h2>
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="text-center">
              <th className="py-2 px-4 border-b">TotalFish Sell</th>
              <th className="py-2 px-4 border-b">Total Expense</th>
              <th className="py-2 px-4 border-b">Income</th>
            </tr>
          </thead>
          <tbody>
            {/* Example data */}
            <tr className="text-center">
              <td className="py-2 px-4 border-b">$39.5</td>
              <td className="py-2 px-4 border-b">$15</td>
              <td className="py-2 px-4 border-b">$24.5</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <p>$1 or 1 United States Dollar equals=109.86 Bangladeshi Taka</p>
        <h1>4,339.51 Taka In Bangladesi Money</h1>
      </div>
    </>
  );
};

export default Income;
