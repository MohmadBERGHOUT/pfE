import React from 'react';
import { PlusCircle, Clock, CheckCircle2, AlertCircle } from 'lucide-react';

const ServicesPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Services</h1>
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <PlusCircle className="h-5 w-5 mr-2" />
          New Service
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-yellow-50 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-yellow-800">Pending</h2>
            <Clock className="h-5 w-5 text-yellow-600" />
          </div>
          <div className="space-y-4">
            {/* Pending Service Card */}
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium">Oil Change</h3>
                <span className="text-sm text-gray-500">30 mins</span>
              </div>
              <p className="text-sm text-gray-600 mb-2">Toyota Camry - ABC123</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">John Smith</span>
                <button className="text-blue-600 hover:text-blue-800 text-sm">Start</button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-blue-800">In Progress</h2>
            <AlertCircle className="h-5 w-5 text-blue-600" />
          </div>
          <div className="space-y-4">
            {/* In Progress Service Card */}
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium">Brake Repair</h3>
                <span className="text-sm text-gray-500">2 hours</span>
              </div>
              <p className="text-sm text-gray-600 mb-2">Honda Civic - XYZ789</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Mike Johnson</span>
                <button className="text-green-600 hover:text-green-800 text-sm">Complete</button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-green-50 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-green-800">Completed</h2>
            <CheckCircle2 className="h-5 w-5 text-green-600" />
          </div>
          <div className="space-y-4">
            {/* Completed Service Card */}
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium">Tire Rotation</h3>
                <span className="text-sm text-gray-500">1 hour</span>
              </div>
              <p className="text-sm text-gray-600 mb-2">Ford F-150 - DEF456</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Sarah Davis</span>
                <button className="text-blue-600 hover:text-blue-800 text-sm">View</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;