export interface AuthURLResponse<T> {
  code: number;
  data: T[];
  message: string;
}
export interface authToken {
  authToken: string;
}

export interface Customer {
  id: number;
  name: string;
  phone: string;
  email?: string;
}

export interface Artist {
  id?: number;
  name: string;
  phone: string;
  specialization: string;
}

export interface Service {
  id?: number;
  name: string;
  price: number;
  duration: number;
}

export interface Appointment {
  id?: number;
  customer: Customer;
  artist: Artist;
  service: Service;
  date: string;
  time: string;
  status: string;
}
