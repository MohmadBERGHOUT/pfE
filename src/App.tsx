import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import CustomersPage from './pages/CustomersPage';
import VehiclesPage from './pages/VehiclesPage';
import ServicesPage from './pages/ServicesPage';
import InvoicingPage from './pages/InvoicingPage';
import InventoryPage from './pages/InventoryPage';
import AppointmentsPage from './pages/AppointmentsPage';
import EmployeesPage from './pages/EmployeesPage';
import ReportsPage from './pages/ReportsPage';

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <main className="flex-1 bg-gray-100 min-h-screen p-8">
          <Routes>
            <Route path="/" element={
              <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">
                  Welcome to AutoWorkshop Pro
                </h1>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <p className="text-gray-600 mb-4">
                    Manage your workshop operations efficiently with our comprehensive system.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h2 className="text-xl font-semibold text-black-1000 mb-2">
                        Quick Stats
                      </h2>
                      <p className="text-black-700">Loading statistics...</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h2 className="text-xl font-semibold text-green-900 mb-2">
                        Today's Appointments
                      </h2>
                      <p className="text-green-700">Loading appointments...</p>
                    </div>
                  </div>
                </div>
              </div>
            } />
            <Route path="/customers" element={<CustomersPage />} />
            <Route path="/vehicles" element={<VehiclesPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/invoicing" element={<InvoicingPage />} />
            <Route path="/inventory" element={<InventoryPage />} />
            <Route path="/appointments" element={<AppointmentsPage />} />
            <Route path="/employees" element={<EmployeesPage />} />
            <Route path="/reports" element={<ReportsPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;