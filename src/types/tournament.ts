export interface TournamentFormFields {
  player1Name: string;
  player1Email: string;
  player1Phone: string;
  player2Name: string;
  player2Email: string;
  player2Phone: string;
  homeCourt: string;
  eventDate: string;
  waiver: boolean;
}

export interface JuniorFormFields extends TournamentFormFields {
  parentGuardian?: string;
  emergencyContact?: string;
  medicalInfo?: string;
}

export interface TournamentConfig {
  isJunior: boolean;
  entryFee: number;
  format: string;
  guaranteedRounds: number;
  paymentMethods: string[];
  location: string;
  contactEmail: string;
}

export const juniorConfig: TournamentConfig = {
  isJunior: true,
  entryFee: 60,
  format: 'FIVB-Style King/Queen of the Court',
  guaranteedRounds: 5,
  paymentMethods: ['Venmo: @Daytonscott', 'Cash to Dayton at Beach Bakyard'],
  location: 'Beach Bakyard - 3001 Los Rios Blvd, Plano, TX 75074',
  contactEmail: 'homecourtsignup@beachbakyard.com'
};

export const openConfig: TournamentConfig = {
  isJunior: false,
  entryFee: 50,
  format: 'FIVB-Style King of the Court',
  guaranteedRounds: 5,
  paymentMethods: ['Venmo: @Daytonscott', 'Cash to Dayton at Beach Bakyard'],
  location: 'Beach Bakyard - 3001 Los Rios Blvd, Plano, TX 75074',
  contactEmail: 'homecourtsignup@beachbakyard.com'
};