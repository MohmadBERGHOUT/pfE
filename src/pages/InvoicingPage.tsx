import React from 'react';
import { PlusCircle, DollarSign, Download } from 'lucide-react';

const InvoicingPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Invoicing</h1>
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <PlusCircle className="h-5 w-5 mr-2" />
          Create Invoice
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-lg p-6 shadow-md">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-lg font-semibold text-gray-900">Total Revenue</h2>
            <DollarSign className="h-5 w-5 text-green-600" />
          </div>
          <p className="text-3xl font-bold text-gray-900">$12,450</p>
          <p className="text-sm text-gray-500">This month</p>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-md">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-lg font-semibold text-gray-900">Outstanding</h2>
            <DollarSign className="h-5 w-5 text-red-600" />
          </div>
          <p className="text-3xl font-bold text-gray-900">$2,850</p>
          <p className="text-sm text-gray-500">5 invoices</p>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-md">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-lg font-semibold text-gray-900">Paid</h2>
            <DollarSign className="h-5 w-5 text-blue-600" />
          </div>
          <p className="text-3xl font-bold text-gray-900">$9,600</p>
          <p className="text-sm text-gray-500">15 invoices</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Invoices</h2>
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4">Invoice #</th>
              <th className="text-left py-3 px-4">Customer</th>
              <th className="text-left py-3 px-4">Service</th>
              <th className="text-left py-3 px-4">Date</th>
              <th className="text-left py-3 px-4">Amount</th>
              <th className="text-left py-3 px-4">Status</th>
              <th className="text-right py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100 hover:bg-gray-50">
              <td className="py-3 px-4">INV-001</td>
              <td className="py-3 px-4">John Smith</td>
              <td className="py-3 px-4">Oil Change</td>
              <td className="py-3 px-4">Mar 15, 2024</td>
              <td className="py-3 px-4">$89.99</td>
              <td className="py-3 px-4">
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                  Paid
                </span>
              </td>
              <td className="py-3 px-4 text-right">
                <button className="text-blue-600 hover:text-blue-800">
                  <Download className="h-5 w-5" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InvoicingPage;