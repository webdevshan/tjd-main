import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  variant?: string;
  category?: string;
  material?: string;
  gemstone?: string;
  hoverImage?: string;
}

interface CartState {
  items: Product[];
  isOpen: boolean;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  toggleCart: () => void;
  clearCart: () => void;
  getCartTotal: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      addToCart: (product) =>
        set((state) => {
          const existingItem = state.items.find(
            (item) => item.id === product.id && item.variant === product.variant
          );
          if (existingItem) {
            return {
              items: state.items.map((item) =>
                item.id === product.id && item.variant === product.variant
                  ? { ...item, quantity: item.quantity + product.quantity }
                  : item
              ),
              isOpen: true,
            };
          }
          return { items: [...state.items, product], isOpen: true };
        }),
      removeFromCart: (productId) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== productId),
        })),
      updateQuantity: (productId, quantity) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.id === productId ? { ...item, quantity } : item
          ),
        })),
      toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
      clearCart: () => set({ items: [] }),
      getCartTotal: () =>
        get().items.reduce((total, item) => total + item.price * item.quantity, 0),
    }),
    {
      name: 'cart-storage',
    }
  )
);
