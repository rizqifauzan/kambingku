export interface BreedingBatch {
  id: string;
  code: string;
  location: string;
  enteredDate: string;
  initialCapital: number;
  activeMothers: number;
  kidsSold: number;
  totalProfit: number;
  status: "active" | "completed";
  salesHistory: SaleRecord[];
  investorShare: InvestorShareRecord[];
}

export interface SaleRecord {
  id: string;
  date: string;
  quantity: number;
  price: number;
  totalAmount: number;
}

export interface InvestorShareRecord {
  id: string;
  investorName: string;
  date: string;
  share: number;
  amount: number;
}

export const breedingBatchesData: BreedingBatch[] = [
  {
    id: "1",
    code: "BETOK-01",
    location: "Prov. Bali, Sangsing",
    enteredDate: "12 Jan 2023",
    initialCapital: 30000000,
    activeMothers: 2,
    kidsSold: 12,
    totalProfit: 8450000,
    status: "active",
    salesHistory: [
      {
        id: "s1",
        date: "12 Oct 2025",
        quantity: 5,
        price: 1200000,
        totalAmount: 6000000,
      },
      {
        id: "s2",
        date: "05 Apr 2025",
        quantity: 4,
        price: 1600000,
        totalAmount: 6400000,
      },
      {
        id: "s3",
        date: "20 Nov 2024",
        quantity: 3,
        price: 1400000,
        totalAmount: 4200000,
      },
    ],
    investorShare: [
      {
        id: "i1",
        investorName: "Ahmad Budi",
        date: "12 Oct 2025",
        share: 17.5,
        amount: 562500,
      },
      {
        id: "i2",
        investorName: "Ahmad Budi",
        date: "05 Apr 2025",
        share: 17.5,
        amount: 600000,
      },
      {
        id: "i3",
        investorName: "Ahmad Budi",
        date: "20 Nov 2024",
        share: 17.5,
        amount: 643750,
      },
    ],
  },
  {
    id: "2",
    code: "JAWA-44",
    location: "Prov. Jawa Timur",
    enteredDate: "05 Jun 2023",
    initialCapital: 25000000,
    activeMothers: 0,
    kidsSold: 8,
    totalProfit: 5200000,
    status: "completed",
    salesHistory: [
      {
        id: "s4",
        date: "15 Sep 2024",
        quantity: 8,
        price: 1100000,
        totalAmount: 8800000,
      },
    ],
    investorShare: [
      {
        id: "i4",
        investorName: "Citra Santoso",
        date: "15 Sep 2024",
        share: 100,
        amount: 5200000,
      },
    ],
  },
];

export const recentSalesHistory = [
  {
    id: "r1",
    batchCode: "BETOK-01",
    date: "12 Oct",
    quantity: 5,
    amount: 1200000,
    status: "completed",
  },
  {
    id: "r2",
    batchCode: "SND-12",
    date: "08 Oct",
    quantity: 3,
    amount: 900000,
    status: "completed",
  },
];
