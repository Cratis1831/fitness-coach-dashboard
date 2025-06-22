export interface ClientData {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  createdAt: Date;
  updatedAt: Date;
  isActive: boolean;
  lastLogin?: Date; // Optional field for last login time
  notes?: string; // Optional field for additional notes
}

export const CLIENT_MOCK_DATA: ClientData[] = [
  {
    id: "1",
    name: "Ashkan Sotoudeh",
    email: "asotoudeh18@hotmail.com",
    phone: "",
    address: "",
    createdAt: new Date(),
    updatedAt: new Date(),
    isActive: true,
  },
];
