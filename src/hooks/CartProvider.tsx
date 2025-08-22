import { type ReactNode, useEffect, useState } from "react";
import { CartContext } from "./CartContext";





interface CoffeeCart {
  id: number;
  tags: string;
  name: string;
  description: string;
  photo: string;
  sizes: {
      P: number;
      M: number;
      G: number;
    }; 
}

export interface CarItems extends CoffeeCart{    // pego a tipagem de coffeecart e adiciono o quantity
  quantity: number; 
  selectedSize: "P" | "M" | "G";   
}

export interface CartContextType { // aqui é a tipagem de tudo q será compartilhado pelo provider
  coffeeCart: CarItems[];
  addCoffeeToCart: (coffee: CarItems) => void;
  removeCoffeeOnCard: (coffeeId: number) => void;
  increaseQuantity: (id: number, quantity: number) => void;
  decreaseQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  cartItemsQuantity: number;
  cartItemsTotalPrice: number;
  
}

export function CartProvider({ children }: { children: ReactNode }) {

  

  const [coffeeCart, setCoffeeCart] = useState<CarItems[]>(() => {
    const storedCart = localStorage.getItem("coffeeCart");
    if(storedCart){
      return JSON.parse(storedCart)
    }else {
      return  [];
    }    
  }); // como valor inicial terei um conteudo do localStorage, e verifico se ele tem alguma coisa, se tiver coloco em coffeeCart, se não o valor inicial será um array vazio.

  const cartItemsQuantity = coffeeCart.length; // pego a quantidade do items do carrinho pelo tamanho do array.

  const cartItemsTotalPrice = coffeeCart.reduce((acc, coffee) => {
    // faço um reduce no array de items no carrinho p saber o total

    const price = coffee.sizes[coffee.selectedSize]; // pega o preço do tamanho escolhido
    return acc + price * coffee.quantity
  }, 0)

  const addCoffeeToCart = (coffee: CarItems) => {

    console.log("café chegando no addcoffeeetoart", coffee)

    setCoffeeCart((prev) => {
      const coffeeAlreadyExists = prev.find((item) => item.id ===coffee.id );

      if(coffeeAlreadyExists){
        return prev.map((item) => item.id === coffee.id ? {...coffee, quantity: coffee.quantity + coffee.quantity} : coffee);
      }

      return [...prev, coffee] // esse é o conteudo q será adicionado no setCoffeeCart, ou seja, se o café já existir no carrinho, desestruturo ele e adiciono a quantidade escolhida a propriedade quantidade. Se não retorno apenas o café como estava.
    })
  }

  const increaseQuantity = (id:number , delta: number) => {
    setCoffeeCart((prev) => 
    prev.map((item) => 
      item.id === id ? {...item, quantity: Math.max(item.quantity + delta, 0)} : item ).filter(item => item.quantity > 0))
    
  };

  const decreaseQuantity = (id:number , delta: number) => {
    setCoffeeCart((prev) => 
    prev.map((coffee) => 
      coffee.id === id ? {...coffee, quantity: Math.max(coffee.quantity - delta, 0)} : coffee ).filter(coffee => coffee.quantity > 0))
    
  };

  const removeCoffeeOnCard = (id: number) => {
    const newCoffees = coffeeCart.filter((coffee) => id !== coffee.id);

    setCoffeeCart(newCoffees);
  };

  const clearCart = ()=> {
    setCoffeeCart([]);
    

  }

  

  useEffect(() => {

    localStorage.setItem("coffeeCart", JSON.stringify(coffeeCart))
  console.log('Carrinho atualizado:', coffeeCart);
  }, [coffeeCart]);


  return (
    <CartContext.Provider value={{ coffeeCart, addCoffeeToCart, removeCoffeeOnCard, increaseQuantity, decreaseQuantity, clearCart, cartItemsQuantity, cartItemsTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
}
