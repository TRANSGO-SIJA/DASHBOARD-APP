import { NavItem } from "@/types";

export type User = {
  id: number;
  name: string;
  company: string;
  role: string;
  verified: boolean;
  status: string;
};
export const users: User[] = [
  {
    id: 1,
    name: "Candice Schiner",
    company: "Dell",
    role: "Frontend Developer",
    verified: false,
    status: "Active",
  },
  {
    id: 2,
    name: "John Doe",
    company: "TechCorp",
    role: "Backend Developer",
    verified: true,
    status: "Active",
  },
  {
    id: 3,
    name: "Alice Johnson",
    company: "WebTech",
    role: "UI Designer",
    verified: true,
    status: "Active",
  },
  {
    id: 4,
    name: "David Smith",
    company: "Innovate Inc.",
    role: "Fullstack Developer",
    verified: false,
    status: "Inactive",
  },
  {
    id: 5,
    name: "Emma Wilson",
    company: "TechGuru",
    role: "Product Manager",
    verified: true,
    status: "Active",
  },
  {
    id: 6,
    name: "James Brown",
    company: "CodeGenius",
    role: "QA Engineer",
    verified: false,
    status: "Active",
  },
  {
    id: 7,
    name: "Laura White",
    company: "SoftWorks",
    role: "UX Designer",
    verified: true,
    status: "Active",
  },
  {
    id: 8,
    name: "Michael Lee",
    company: "DevCraft",
    role: "DevOps Engineer",
    verified: false,
    status: "Active",
  },
  {
    id: 9,
    name: "Olivia Green",
    company: "WebSolutions",
    role: "Frontend Developer",
    verified: true,
    status: "Active",
  },
  {
    id: 10,
    name: "Robert Taylor",
    company: "DataTech",
    role: "Data Analyst",
    verified: false,
    status: "Active",
  },
];

export type Employee = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  gender: string;
  date_of_birth: string; // Consider using a proper date type if possible
  street: string;
  city: string;
  state: string;
  country: string;
  zipcode: string;
  longitude?: number; // Optional field
  latitude?: number; // Optional field
  job: string;
  profile_picture?: string | null; // Profile picture can be a string (URL) or null (if no picture)
};

export type Drivers = {
  id: number;
  name: string;
  status: string;
  email: string;
  date_of_birth: string;
  nik: string;
  role: string;
  id_photo: string;
  gender: string;
  phone_number: string;
  emergency_phone_number: string;
};
export type Requests = {
  id: number;
  name: string;
  status: string;
  email: string;
  date_of_birth: string;
  nik: string;
  role: string;
  id_photo: string;
};

export const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: "dashboard",
    label: "Dashboard",
    roles: ["admin", "owner"],
  },
  {
    title: "Calendar",
    href: "/dashboard/calendar",
    icon: "calendar",
    label: "calendar",
    roles: ["admin", "owner"],
  },
  {
    title: "Request Tasks",
    href: "/dashboard/requests",
    icon: "clipboardList",
    label: "task",
    roles: ["admin"],
  },
  {
    title: "Pesanan",
    href: "/dashboard/orders",
    icon: "ticket",
    label: "orders",
    roles: ["admin"],
  },
  {
    title: "Fleets",
    href: "/dashboard/fleets",
    icon: "car",
    label: "Fleet",
    roles: ["admin", "owner"],
  },
  {
    title: "Drivers",
    href: "/dashboard/drivers",
    icon: "profile",
    label: "profile",
    roles: ["admin"],
  },
  {
    title: "Reimburse",
    href: "/dashboard/reimburse",
    icon: "hand",
    label: "reimburse",
    roles: ["admin", "driver"],
  },
  {
    title: "Customers",
    href: "/dashboard/customers",
    icon: "users",
    label: "customer",
    roles: ["admin"],
  },
  {
  title: "Verifikasi Tambahan",
  href: "/dashboard/verification",
  icon: "users",
  label: "customer",
  roles: ["admin"],
  },
  {
    title: "Location",
    href: "/dashboard/location",
    icon: "maps",
    label: "Location",
    roles: ["admin"],
  },
  {
    title: "Owners",
    href: "/dashboard/owners",
    icon: "owners",
    label: "owners",
    roles: ["admin"],
  },
  {
    title: "Rekap Pencatatan",
    href: "/dashboard/recap",
    icon: "notebookText",
    label: "recap",
    roles: ["owner"],
  },
  {
  title: "Driver Mitra",
  href: "/dashboard/mitra-drivers",
  icon: "usersicon",
  label: "Driver Mitra",
  roles: ["admin"],
  },
  {
  title: "Fleet Mitra",
  href: "/dashboard/partner-fleets",
  icon: "carpartner",
  label: "Fleet Mitra",
  roles: ["admin"],
  },
  {
  title: "Template Pesan Fleet",
  href: "/dashboard/wa-blas-partner",
  icon: "phonecall",
  label: "Template Pesan Fleet",
  roles: ["admin"],
  },
];
