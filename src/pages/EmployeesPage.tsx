import React from 'react';
import { PlusCircle, Search } from 'lucide-react';

const EmployeesPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Employees</h1>
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <PlusCircle className="h-5 w-5 mr-2" />
          Add Employee
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Total Employees</h2>
          <p className="text-3xl font-bold text-gray-900">12</p>
          <p className="text-sm text-gray-500">Active staff members</p>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-md">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">On Duty Today</h2>
          <p className="text-3xl font-bold text-green-600">8</p>
          <p className="text-sm text-gray-500">Currently working</p>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-md">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">On Leave</h2>
          <p className="text-3xl font-bold text-orange-600">2</p>
          <p className="text-sm text-gray-500">Scheduled time off</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center space-x-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search employees..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">All Roles</option>
            <option value="mechanic">Mechanic</option>
            <option value="technician">Technician</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4">Name</th>
              <th className="text-left py-3 px-4">Role</th>
              <th className="text-left py-3 px-4">Email</th>
              <th className="text-left py-3 px-4">Phone</th>
              <th className="text-left py-3 px-4">Status</th>
              <th className="text-right py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100 hover:bg-gray-50">
              <td className="py-3 px-4">Mike Johnson</td>
              <td className="py-3 px-4">Senior Mechanic</td>
              <td className="py-3 px-4">mike@example.com</td>
              <td className="py-3 px-4">(555) 234-5678</td>
              <td className="py-3 px-4">
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                  Active
                </span>
              </td>
              <td className="py-3 px-4 text-right">
                <button className="text-blue-600 hover:text-blue-800 mr-3">Edit</button>
                <button className="text-red-600 hover:text-red-800">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeesPage;