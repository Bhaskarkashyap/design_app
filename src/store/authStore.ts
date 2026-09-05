import { create } from 'zustand';

interface PersonalInfo {
  fullName: string;
  age: number | null;
  pronouns: string;
}

interface LocationInfo {
  state: string;
  city: string;
  college: string;
}

interface AuthState {
  email: string;
  otp: string;
  personalInfo: PersonalInfo;
  locationInfo: LocationInfo;

  setEmail: (email: string) => void;
  setOtp: (otp: string) => void;
  setPersonalInfo: (data: PersonalInfo) => void;
  setLocationInfo: (data: LocationInfo) => void;
  reset: () => void;
}

const initialState = {
  email: '',
  otp: '',
  personalInfo: {
    fullName: '',
    age: null as number | null,
    pronouns: '',
  },
  locationInfo: {
    state: '',
    city: '',
    college: '',
  },
};

export const useAuthStore = create<AuthState>((set) => ({
  ...initialState,

  setEmail: (email) => set({ email }),
  setOtp: (otp) => set({ otp }),
  setPersonalInfo: (data) => set({ personalInfo: data }),
  setLocationInfo: (data) => set({ locationInfo: data }),
  reset: () => set(initialState),
}));
