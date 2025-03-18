import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Users, Car, Wrench, Calculator, 
  Package, Calendar, UserCircle, BarChart 
} from 'lucide-react';

const Sidebar: React.FC = () => {
  const menuItems = [
    { icon: Users, label: 'Customers', path: '/customers' },
    { icon: Car, label: 'Vehicles', path: '/vehicles' },
    { icon: Wrench, label: 'Services', path: '/services' },
    { icon: Calculator, label: 'Invoicing', path: '/invoicing' },
    { icon: Package, label: 'Inventory', path: '/inventory' },
    { icon: Calendar, label: 'Appointments', path: '/appointments' },
    { icon: UserCircle, label: 'Employees', path: '/employees' },
    { icon: BarChart, label: 'Reports', path: '/reports' },
  ];

  return (
    <div className="w-64 bg-gray-900 min-h-screen p-4">
      <div className="flex items-center justify-center mb-8">
        <Wrench className="h-8 w-8 text-blue-500" />
        <h1 className="text-white text-xl font-bold ml-2">AutoWorkshop Pro</h1>
      </div>
      <nav>
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center text-gray-300 hover:text-white hover:bg-gray-800 px-4 py-3 rounded-lg mb-1 transition-colors ${
                isActive ? 'bg-gray-800 text-white' : ''
              }`
            }
          >
            <item.icon className="h-5 w-5 mr-3" />
            {item.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;