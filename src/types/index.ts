export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  created_at: string;
}

export interface Vehicle {
  id: string;
  customer_id: string;
  brand: string;
  model: string;
  year: number;
  license_plate: string;
  vin: string;
  created_at: string;
}

export interface ServiceRecord {
  id: string;
  vehicle_id: string;
  service_date: string;
  description: string;
  cost: number;
  status: 'pending' | 'in_progress' | 'completed';
  technician_id: string;
  created_at: string;
}

export interface Employee {
  id: string;
  name: string;
  position: string;
  email: string;
  phone: string;
  hire_date: string;
  created_at: string;
}

export interface Part {
  id: string;
  name: string;
  serial_number: string;
  supplier: string;
  quantity: number;
  price: number;
  reorder_level: number;
  created_at: string;
}