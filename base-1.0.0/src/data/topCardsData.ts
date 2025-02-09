export interface TopCard {
  id: string | number;
  icon: string;
  title: string;
  // count: number;
  iconColor: string;
  iconBg: string;
}

export const topCardsData: TopCard[] = [
  {
    id: 1,
    icon: 'mdi:bank', // Represents banking institutions
    title: 'USA BANK LOGS',
    // count: 178,
    iconColor: 'secondary.main',
    iconBg: 'transparent.secondary.main',
  },
  {
    id: 2,
    icon: 'mdi:bank-outline', // Represents Canadian banking institutions
    title: 'CANADIAN BANK LOGS',
    // count: 20,
    iconColor: 'warning.main',
    iconBg: 'transparent.warning.main',
  },
  {
    id: 3,
    icon: 'mdi:check-decagram', // Represents verification
    title: 'Verified Account',
    // count: 190,
    iconColor: 'error.light',
    iconBg: 'transparent.error.light',
  },
  {
    id: 4,
    icon: 'mdi:cheque', // Represents financial checks
    title: 'Checks',
    // count: 12,
    iconColor: 'primary.main',
    iconBg: 'transparent.primary.main',
  },
];
