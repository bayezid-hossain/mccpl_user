import React from 'react';

type Transaction = {
  img: string;
  name: string;
  amount: string;
  date: string;
  status: string;
  account: string;
  accountNumber: string;
  expiry: string;
};

type DashboardTableProps = {
  transactions: Transaction[];
};

const TABLE_HEAD = ['Transaction', 'Amount', 'Date', 'Status', 'Account', ''];

const DashboardTable: React.FC<DashboardTableProps> = ({ transactions }) => {
  return (
    <div className="flex flex-col">
      {/* ... (rest of the component remains unchanged) */}
      <div className="p-1.5 w-full inline-block align-middle">
        <div className="overflow-hidden border rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {TABLE_HEAD.map((heading, index) => (
                  <th
                    key={index}
                    scope="col"
                    className={`${
                      index === 0
                        ? 'py-3 pl-4'
                        : 'px-6 py-3 text-xs font-bold text-left'
                    } text-gray-500 uppercase`}
                  >
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {transactions.map((transaction, index) => (
                <tr key={index}>
                  <td className="py-3 pl-4">
                    <div className="flex items-center h-5">
                      <input
                        type="checkbox"
                        className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="checkbox" className="sr-only">
                        Checkbox
                      </label>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                    {index + 1}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    {transaction.name}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    {transaction.amount}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    {transaction.date}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    {transaction.status}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    {transaction.account}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardTable;
