import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

type Transaction = {
  formnumber: string;
  applicant: string;
  amount: string;
  date: string;
  status: string;
  expiry: string;
};

type DashboardTableProps = {
  transactions: Transaction[];
};

const TABLE_HEAD = [
  'Form Number',
  'Applicant',
  'Date',
  'Status',
  'Expiry',
  'Action',
];

const DashboardTable: React.FC<DashboardTableProps> = ({ transactions }) => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.formnumber.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col my-10 px-6 w-full">
      <label htmlFor="hs-table-search" className="sr-only">
        Search
      </label>
      <input
        type="text"
        name="hs-table-search"
        id="hs-table-search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="block w-full p-3 pl-10 text-sm border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
        placeholder="Search..."
      />
      <div className="w-full h-auto inline-block align-middle max-h-[60vh] overflow-auto">
        {/* Add overflow-auto class to enable scrolling */}
        <div className="overflow-x-auto border rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {TABLE_HEAD.map((heading, index) => (
                  <th
                    key={index}
                    scope="col"
                    className={`${'px-6 py-3 text-sm  font-bold text-center'} text-gray-500 uppercase`}
                  >
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredTransactions.map((transaction, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 text-center text-sm text-gray-800 whitespace-nowrap">
                    {transaction.formnumber}
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-gray-800 whitespace-nowrap">
                    {transaction.applicant}
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-gray-800 whitespace-nowrap">
                    {transaction.date}
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-gray-800 whitespace-nowrap">
                    {transaction.status}
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-gray-800 whitespace-nowrap">
                    {transaction.date}
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-gray-800 whitespace-nowrap">
                    <button
                      className="blue-button"
                      onClick={() => {
                        router.push(
                          `/dashboard/applications/${transaction.formnumber}`
                        );
                      }}
                    >
                      View
                    </button>
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
