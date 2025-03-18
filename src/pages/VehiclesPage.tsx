import React from 'react';
import { PlusCircle, Search, Filter } from 'lucide-react';

const VehiclesPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Vehicles</h1>
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <PlusCircle className="h-5 w-5 mr-2" />
          Add Vehicle
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center space-x-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search vehicles..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <Filter className="h-5 w-5 mr-2" />
            Filters
          </button>
        </div>

        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4">License Plate</th>
              <th className="text-left py-3 px-4">Brand</th>
              <th className="text-left py-3 px-4">Model</th>
              <th className="text-left py-3 px-4">Year</th>
              <th className="text-left py-3 px-4">Owner</th>
              <th className="text-left py-3 px-4">Last Service</th>
              <th className="text-right py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100 hover:bg-gray-50">
              <td className="py-3 px-4">ABC123</td>
              <td className="py-3 px-4">Toyota</td>
              <td className="py-3 px-4">Camry</td>
              <td className="py-3 px-4">2022</td>
              <td className="py-3 px-4">John Smith</td>
              <td className="py-3 px-4">Mar 10, 2024</td>
              <td className="py-3 px-4 text-right">
                <button className="text-blue-600 hover:text-blue-800 mr-3">View</button>
                <button className="text-blue-600 hover:text-blue-800">Edit</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VehiclesPage;