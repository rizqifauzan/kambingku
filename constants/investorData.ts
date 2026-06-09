export interface Investor {
  id: string;
  name: string;
  activeCount: number;
  currentBalance: number;
  investmentBalance: number;
  totalModal: number;
  status: "healthy" | "alert" | "pending";
  programs: ("breeding" | "fattening" | "qurban")[];
  colorAccent: string;
}

export const investorsData: Investor[] = [
  {
    id: "1",
    name: "Ahmad Budi",
    activeCount: 3,
    currentBalance: 150000000,
    investmentBalance: 162500000,
    totalModal: 0,
    status: "healthy",
    programs: ["breeding", "fattening"],
    colorAccent: "#2D7A4A",
  },
  {
    id: "2",
    name: "Citra Santoso",
    activeCount: 1,
    currentBalance: 48200000,
    investmentBalance: 0,
    totalModal: 50000000,
    status: "alert",
    programs: ["qurban"],
    colorAccent: "#8B3A3A",
  },
  {
    id: "3",
    name: "Dian Wibowo",
    activeCount: 2,
    currentBalance: 205000000,
    investmentBalance: 0,
    totalModal: 200000000,
    status: "healthy",
    programs: ["fattening"],
    colorAccent: "#2D7A4A",
  },
  {
    id: "4",
    name: "Siti Nurhaliza",
    activeCount: 2,
    currentBalance: 15400000,
    investmentBalance: 0,
    totalModal: 0,
    status: "healthy",
    programs: ["breeding"],
    colorAccent: "#2D7A4A",
  },
  {
    id: "5",
    name: "Budi Santoso",
    activeCount: 1,
    currentBalance: -2500000,
    investmentBalance: 0,
    totalModal: 0,
    status: "alert",
    programs: ["fattening"],
    colorAccent: "#DC2626",
  },
];
