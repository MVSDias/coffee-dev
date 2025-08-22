import { createContext } from "react";
import type { CartContextType } from "./CartProvider";

//crio o contexto;
export const CartContext = createContext<CartContextType | undefined>(undefined);