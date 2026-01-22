import { persist } from "zustand/middleware";
import { create } from "zustand";
import { Product } from "@/app/types";

export interface CartItem extends Product {
    qty: number;
}

export interface CustomerInfo {
    customerName: string;
    customerContact: number | null;
    customerAddress: string;
}

interface CartStore {
    customerInfo: CustomerInfo | null;

    items: CartItem[];
    setCustomerInfo: (info: CustomerInfo) => void;
    addItem: (product: Product, qty?: number) => void;
    removeItem: (productId: string) => void;
    reset: () => void;
}


export const useCartStore = create<CartStore>()(
    persist(
        (set, get) => ({
            customerInfo: null,
            items: [],
            setCustomerInfo: (info: CustomerInfo) => {
                set({ customerInfo: info });
            },
            addItem: (product: Product, qty: number = 1) => {
                const existingItem = get().items.find(item => item._id === product._id);

                if (existingItem) {
                    set((state) => ({
                        items: state.items.map(item =>
                            item._id === product._id
                                ? { ...item, qty: item.qty + qty }
                                : item
                        ),
                    }));
                } else {
                    set((state) => ({
                        items: [...state.items, { ...product, qty }],
                    }));
                }
            },
            removeItem: (productId) => {
                //items = {a,b,s,d,e}
                //productid =c
                //items {a,b,d,e} tanpa c
                set({ items: get().items.filter(item => item._id !== productId) });
            },
            reset: () => {
                set({ items: [], customerInfo: null });
            },
        }),
        {
            name: "cart-storage",
        }
    )
);

export default useCartStore;