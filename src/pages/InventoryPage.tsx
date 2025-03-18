import React from 'react';
import { PlusCircle, Search, AlertCircle } from 'lucide-react';

const InventoryPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Inventory</h1>
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <PlusCircle className="h-5 w-5 mr-2" />
          Add Item
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Total Items</h2>
          <p className="text-3xl font-bold text-gray-900">1,234</p>
          <p className="text-sm text-gray-500">In stock</p>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-md">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Low Stock</h2>
          <p className="text-3xl font-bold text-red-600">15</p>
          <p className="text-sm text-gray-500">Items below threshold</p>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-md">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Value</h2>
          <p className="text-3xl font-bold text-gray-900">$45,670</p>
          <p className="text-sm text-gray-500">Total inventory value</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center space-x-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search inventory..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">All Categories</option>
            <option value="filters">Filters</option>
            <option value="brakes">Brakes</option>
            <option value="oils">Oils</option>
          </select>
        </div>

        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4">Item</th>
              <th className="text-left py-3 px-4">Category</th>
              <th className="text-left py-3 px-4">SKU</th>
              <th className="text-left py-3 px-4">In Stock</th>
              <th className="text-left py-3 px-4">Price</th>
              <th className="text-right py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100 hover:bg-gray-50">
              <td className="py-3 px-4">Oil Filter</td>
              <td className="py-3 px-4">Filters</td>
              <td className="py-3 px-4">FLT-001</td>
              <td className="py-3 px-4 flex items-center">
                <span className="mr-2">5</span>
                {5 < 10 && <AlertCircle className="h-4 w-4 text-red-500" />}
              </td>
              <td className="py-3 px-4">$12.99</td>
              <td className="py-3 px-4 text-right">
                <button className="text-blue-600 hover:text-blue-800 mr-3">Edit</button>
                <button className="text-blue-600 hover:text-blue-800">Order</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InventoryPage;