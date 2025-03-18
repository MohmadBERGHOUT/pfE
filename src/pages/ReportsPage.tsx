import { BarChart as BarChartIcon, PieChart, TrendingUp, Download } from 'lucide-react';

const ReportsPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Reports</h1>
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <Download className="h-5 w-5 mr-2" />
          Export Reports
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font- semibold text-gray-900">Revenue Overview</h2>
            <BarChartIcon className="h-5 w-5 text-gray-500" />
          </div>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Revenue chart will be displayed here</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Service Distribution</h2>
            <PieChart className="h-5 w-5 text-gray-500" />
          </div>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Service distribution chart will be displayed here</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Monthly Trends</h2>
            <TrendingUp className="h-5 w-5 text-gray-500" />
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Revenue Growth</span>
              <span className="text-green-600">+15%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-600 h-2 rounded-full" style={{ width: '15%' }}></div>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-gray-600">Customer Growth</span>
              <span className="text-blue-600">+8%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: '8%' }}></div>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-gray-600">Service Efficiency</span>
              <span className="text-purple-600">+12%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-purple-600 h-2 rounded-full" style={{ width: '12%' }}></div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Customer Insights</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="text-sm text-gray-500">Customer Satisfaction</p>
                <p className="text-xl font-semibold">4.8/5.0</p>
              </div>
              <div className="text-green-600">↑ 3%</div>
            </div>

            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="text-sm text-gray-500">Repeat Customers</p>
                <p className="text-xl font-semibold">76%</p>
              </div>
              <div className="text-blue-600">↑ 2%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsPage;