import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Currency = 'AUD' | 'USD' | 'EUR' | 'GBP';
export type Language = 'en' | 'fr' | 'es';

interface SettingsState {
  currency: Currency;
  language: Language;
  setCurrency: (currency: Currency) => void;
  setLanguage: (language: Language) => void;
  formatPrice: (priceInAud: number) => string;
}

const RATES: Record<Currency, number> = {
  AUD: 1,
  USD: 0.68,
  EUR: 0.62,
  GBP: 0.53,
};

const SYMBOLS: Record<Currency, string> = {
  AUD: 'AU$',
  USD: 'US$',
  EUR: '€',
  GBP: '£',
};

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set, get) => ({
      currency: 'AUD',
      language: 'en',
      setCurrency: (currency) => set({ currency }),
      setLanguage: (language) => set({ language }),
      formatPrice: (priceInAud) => {
        const { currency } = get();
        const rate = RATES[currency];
        const value = priceInAud * rate;
        return `${SYMBOLS[currency]}${value.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}`;
      },
    }),
    {
      name: 'settings-storage',
    }
  )
);
