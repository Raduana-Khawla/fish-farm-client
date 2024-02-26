import React from "react";

const Expense = () => {
  return (
    <div className=" h-[103vh]">
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
              <th className="py-2 px-4 border-b">Services</th>
              <th className="py-2 px-4 border-b">Cost</th>
            </tr>
          </thead>
          <tbody>
            {/* Example data */}
            <tr className="text-center">
              <td className="py-2 px-4 border-b">1</td>
              <td className="py-2 px-4 border-b">Workers</td>
              <td className="py-2 px-4 border-b">$5</td>
            </tr>
            <tr className="text-center">
              <td className="py-2 px-4 border-b">2</td>
              <td className="py-2 px-4 border-b">Supliers</td>
              <td className="py-2 px-4 border-b">$5</td>
            </tr>
            <tr className="text-center">
              <td className="py-2 px-4 border-b">3</td>
              <td className="py-2 px-4 border-b">Ponds</td>
              <td className="py-2 px-4 border-b">$5</td>
            </tr>

            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>

      <div className="overflow-x-auto pt-5">
        <h2 className="text-3xl font-bold mb-4">
          Total Expense of February Month 2024
        </h2>
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="text-center">
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Total Cost</th>
              <th className="py-2 px-4 border-b">Date</th>
            </tr>
          </thead>
          <tbody>
            {/* Example data */}
            <tr className="text-center">
              <td className="py-2 px-4 border-b">1</td>
              <td className="py-2 px-4 border-b">$15</td>
              <td className="py-2 px-4 border-b">$28.02.2024</td>
            </tr>

            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Expense;
